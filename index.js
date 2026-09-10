import express from 'express';
import fs from 'fs';
import path from 'path';
import pino from 'pino';
import qrcode from 'qrcode-terminal';
import { fileURLToPath, pathToFileURL } from 'url';
import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  Browsers,
} from '@whiskeysockets/baileys';
import config from './config.js';
import { commands, findCommand } from './command.js';
import { serialize } from './lib/msg.js';
import { connectMongo, getGroup, isMongoReady } from './lib/db.js';
import { isOwner, jidToNum, runtime } from './lib/functions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const startTime = Date.now();
global.botStart = startTime;

const logger = pino({ level: process.env.LOG_LEVEL || 'silent' });

async function loadPlugins() {
  const dir = path.join(__dirname, 'plugins');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.js'));
  for (const file of files) {
    const full = path.join(dir, file);
    await import(pathToFileURL(full).href);
    console.log(`[PLUGIN] loaded ${file}`);
  }
  console.log(`[PLUGIN] ${commands.length} commands registered`);
}

function modeAllows(m) {
  const mode = config.MODE;
  if (mode === 'public') return true;
  if (mode === 'private') return m.isOwner || m.fromMe;
  if (mode === 'inbox') return !m.isGroup || m.isOwner;
  if (mode === 'groups') return m.isGroup || m.isOwner;
  return true;
}

async function startBot() {
  await connectMongo();
  await loadPlugins();

  const sessionDir = path.resolve(config.SESSION_DIR);
  if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir, { recursive: true });

  const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
  let version;
  try {
    const latest = await fetchLatestBaileysVersion();
    version = latest.version;
  } catch {
    version = [2, 3000, 1025190524];
  }

  const sock = makeWASocket({
    version,
    logger,
    printQRInTerminal: false,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    browser: Browsers.ubuntu('Chrome'),
    syncFullHistory: false,
    markOnlineOnConnect: false,
    generateHighQualityLinkPreview: true,
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;
    if (qr) {
      console.log('\n[QR] Scan this QR with WhatsApp → Linked Devices\n');
      qrcode.generate(qr, { small: true });
    }
    if (connection === 'open') {
      console.log(`[OK] ${config.BOT_NAME} connected as ${sock.user?.id}`);
    }
    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;
      const reconnect = code !== DisconnectReason.loggedOut;
      console.log(`[CONN] closed code=${code} reconnect=${reconnect}`);
      if (reconnect) setTimeout(() => startBot(), 3000);
      else console.log('[CONN] Logged out — delete session folder and restart to re-pair');
    }
  });

  // In-memory antilink overrides when Mongo is off
  const antilinkLocal = new Map();

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    const raw = messages[0];
    if (!raw?.message) return;
    if (raw.key.remoteJid === 'status@broadcast') return;

    try {
      const m = await serialize(sock, raw);
      if (!m.body && !m.message) return;

      // Antilink
      if (m.isGroup && !m.fromMe && !m.isOwner) {
        let antilinkOn = config.ANTILINK;
        if (isMongoReady()) {
          const g = await getGroup(m.chat);
          if (g) antilinkOn = g.antilink;
        } else if (antilinkLocal.has(m.chat)) {
          antilinkOn = antilinkLocal.get(m.chat);
        }
        if (antilinkOn) {
          const text = m.body || '';
          if (/(https?:\/\/|www\.|wa\.me\/|chat\.whatsapp\.com\/)/i.test(text)) {
            try {
              const meta = await sock.groupMetadata(m.chat);
              const admins = meta.participants
                .filter((p) => p.admin)
                .map((p) => p.id);
              const botId = sock.user?.id;
              const botIsAdmin = admins.some(
                (a) => jidToNum(a) === jidToNum(botId)
              );
              const senderAdmin = admins.some(
                (a) => jidToNum(a) === jidToNum(m.sender)
              );
              if (botIsAdmin && !senderAdmin) {
                await sock.sendMessage(m.chat, { delete: m.key });
                await m.reply(`@link detected — removed (@${m.senderNum})`, {
                  mentions: [m.sender],
                });
                return;
              }
            } catch (e) {
              /* ignore */
            }
          }
        }
      }

      const prefix = config.PREFIX;
      if (!m.body || !m.body.startsWith(prefix)) return;
      if (!modeAllows(m)) return;

      const without = m.body.slice(prefix.length).trim();
      const [cmdName, ...rest] = without.split(/\s+/);
      const args = rest;
      const text = rest.join(' ');
      const command = findCommand(cmdName);
      if (!command) return;

      if (command.fromMe && !m.isOwner) {
        await m.reply('Owner only.');
        return;
      }

      // Attach helpers for plugins
      m.args = args;
      m.text = text;
      m.command = cmdName.toLowerCase();
      m.prefix = prefix;
      m.antilinkLocal = antilinkLocal;
      global.sock = sock;

      await command.function(sock, m, {
        args,
        text,
        prefix,
        command: cmdName.toLowerCase(),
        commands,
        config,
        runtime: () => runtime((Date.now() - startTime) / 1000),
      });
    } catch (err) {
      console.error('[MSG]', err);
    }
  });

  return sock;
}

// Health server
const app = express();
app.get('/', (_req, res) => {
  res.json({
    bot: config.BOT_NAME,
    status: 'online',
    uptime: runtime((Date.now() - startTime) / 1000),
    commands: commands.length,
    version: config.VERSION,
  });
});
app.get('/health', (_req, res) => res.send('ok'));
app.listen(config.PORT, () =>
  console.log(`[HTTP] health on :${config.PORT}`)
);

startBot().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
