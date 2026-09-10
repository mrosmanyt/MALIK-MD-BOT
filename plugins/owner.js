import os from 'os';
import config from '../config.js';
import { cmd, commands, commandsByCategory } from '../command.js';
import { runtime, formatBytes, isOwner } from '../lib/functions.js';
import { isMongoReady } from '../lib/db.js';

cmd(
  { pattern: 'ping|pong', desc: 'Check bot latency', category: 'owner', filename: 'owner.js' },
  async (sock, m) => {
    const t = Date.now();
    const sent = await m.reply('Pinging...');
    const ms = Date.now() - t;
    await sock.sendMessage(m.chat, { text: `*Pong!* ${ms}ms\n${config.BOT_NAME}` }, { quoted: m });
  }
);

cmd(
  { pattern: 'runtime|uptime', desc: 'Bot uptime', category: 'owner', filename: 'owner.js' },
  async (sock, m, { runtime: rt }) => {
    await m.reply(`⏱️ *Uptime:* ${rt()}\n🤖 ${config.BOT_NAME} v${config.VERSION}`);
  }
);

cmd(
  { pattern: 'owner|creator', desc: 'Show owner info', category: 'owner', filename: 'owner.js' },
  async (sock, m) => {
    const num = config.OWNER_NUMBER || 'not-set';
    const vcard =
      'BEGIN:VCARD\nVERSION:3.0\n' +
      `FN:${config.OWNER_NAME}\n` +
      `ORG:${config.BOT_NAME};\n` +
      `TEL;type=CELL;type=VOICE;waid=${num}:+${num}\n` +
      'END:VCARD';
    await sock.sendMessage(
      m.chat,
      {
        contacts: {
          displayName: config.OWNER_NAME,
          contacts: [{ vcard }],
        },
      },
      { quoted: m }
    );
    await m.reply(`👤 *Owner:* ${config.OWNER_NAME}\n📱 +${num}\n🤖 ${config.BOT_NAME}`);
  }
);

cmd(
  { pattern: 'menu|help|list', desc: 'Command menu by category', category: 'owner', filename: 'owner.js' },
  async (sock, m, { prefix }) => {
    const byCat = commandsByCategory();
    const cats = Object.keys(byCat).sort();
    let text = `╭───「 *${config.BOT_NAME}* 」\n│ Prefix: \`${prefix}\`\n│ Owner: ${config.OWNER_NAME}\n│ Commands: ${commands.filter((c) => !c.dontAddCommandList).length}\n╰──────────────\n`;
    for (const cat of cats) {
      text += `\n*◈ ${cat.toUpperCase()}*\n`;
      for (const c of byCat[cat].sort((a, b) => a.pattern.localeCompare(b.pattern))) {
        text += `• ${prefix}${c.pattern}${c.desc ? ` — ${c.desc}` : ''}\n`;
      }
    }
    text += `\n_Self-hosted · No remote loaders_`;
    await m.reply(text);
  }
);

cmd(
  { pattern: 'alive', desc: 'Bot alive status', category: 'owner', filename: 'owner.js' },
  async (sock, m, { runtime: rt }) => {
    await m.reply(
      `✅ *${config.BOT_NAME} is alive*\n⏱️ ${rt()}\n🌐 Mode: ${config.MODE}\n💾 Mongo: ${isMongoReady() ? 'on' : 'off'}`
    );
  }
);

cmd(
  { pattern: 'system|sysinfo', desc: 'Host system info', category: 'owner', filename: 'owner.js' },
  async (sock, m) => {
    const mem = process.memoryUsage();
    const text =
      `*System Info*\n` +
      `• Platform: ${os.platform()} ${os.arch()}\n` +
      `• Node: ${process.version}\n` +
      `• CPU: ${os.cpus()?.[0]?.model || 'n/a'}\n` +
      `• Cores: ${os.cpus()?.length || 0}\n` +
      `• Free RAM: ${formatBytes(os.freemem())} / ${formatBytes(os.totalmem())}\n` +
      `• Heap: ${formatBytes(mem.heapUsed)} / ${formatBytes(mem.heapTotal)}\n` +
      `• Uptime host: ${runtime(os.uptime())}`;
    await m.reply(text);
  }
);

cmd(
  { pattern: 'restart', desc: 'Restart process (owner)', category: 'owner', fromMe: true, filename: 'owner.js' },
  async (sock, m) => {
    await m.reply('Restarting...');
    setTimeout(() => process.exit(0), 800);
  }
);

cmd(
  { pattern: 'shutdown', desc: 'Stop bot (owner)', category: 'owner', fromMe: true, filename: 'owner.js' },
  async (sock, m) => {
    await m.reply('Shutting down...');
    setTimeout(() => process.exit(1), 800);
  }
);

cmd(
  { pattern: 'setprefix', desc: 'Show how to change prefix via env', category: 'owner', fromMe: true, filename: 'owner.js' },
  async (sock, m) => {
    await m.reply(
      `Current prefix: \`${config.PREFIX}\`\nChange via env \`PREFIX\` and restart. Runtime mutate disabled for safety.`
    );
  }
);

cmd(
  { pattern: 'mode', desc: 'Show bot mode', category: 'owner', filename: 'owner.js' },
  async (sock, m) => {
    await m.reply(`Mode: *${config.MODE}*\nSet MODE=public|private|inbox|groups in env.`);
  }
);

cmd(
  { pattern: 'speed', desc: 'Speed test style ping', category: 'owner', filename: 'owner.js' },
  async (sock, m) => {
    const start = Date.now();
    await m.react('⚡');
    await m.reply(`⚡ Speed: ${Date.now() - start}ms`);
  }
);

cmd(
  { pattern: 'repo|script', desc: 'Bot repository', category: 'owner', filename: 'owner.js' },
  async (sock, m) => {
    await m.reply(
      `📦 *${config.BOT_NAME}*\nRepo: https://github.com/mrosmanyt/MALIK-MD-BOT\nSelf-hosted Baileys bot — no remote zip loader.`
    );
  }
);

cmd(
  { pattern: 'pair|session', desc: 'Session help', category: 'owner', fromMe: true, filename: 'owner.js' },
  async (sock, m) => {
    await m.reply(
      `Sessions are stored in \`${config.SESSION_DIR}\`.\nDelete that folder and restart to show a new QR.`
    );
  }
);
