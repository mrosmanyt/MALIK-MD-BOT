/**
 * Owner extras: block/unblock, delete msg, forward, fullpp, privacy helpers.
 * No mass-report / botnet remote-control.
 */
import { cmd } from '../command.js';
import { jidToNum } from '../lib/functions.js';

function targetFrom(m, text) {
  if (m.quoted?.sender) return m.quoted.sender;
  if (m.mentionedJid?.[0]) return m.mentionedJid[0];
  const n = (text || '').replace(/\D/g, '');
  if (n.length >= 8) return `${n}@s.whatsapp.net`;
  return null;
}

cmd(
  { pattern: 'block', desc: 'Block a user (owner)', category: 'owner', fromMe: true, filename: 'owner-extra.js' },
  async (sock, m, { text }) => {
    const jid = targetFrom(m, text);
    if (!jid) return m.reply('Tag/reply/number required.');
    try {
      await sock.updateBlockStatus(jid, 'block');
      await m.reply(`🚫 Blocked ${jidToNum(jid)}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'unblock', desc: 'Unblock a user (owner)', category: 'owner', fromMe: true, filename: 'owner-extra.js' },
  async (sock, m, { text }) => {
    const jid = targetFrom(m, text);
    if (!jid) return m.reply('Tag/reply/number required.');
    try {
      await sock.updateBlockStatus(jid, 'unblock');
      await m.reply(`✅ Unblocked ${jidToNum(jid)}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'blocklist', desc: 'List blocked contacts (owner)', category: 'owner', fromMe: true, filename: 'owner-extra.js' },
  async (sock, m) => {
    try {
      const list = await sock.fetchBlocklist();
      if (!list?.length) return m.reply('Blocklist empty.');
      await m.reply(`*Blocked (${list.length})*\n` + list.map((j, i) => `${i + 1}. ${j}`).join('\n'));
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'delete|del', desc: 'Delete the replied message', category: 'owner', filename: 'owner-extra.js' },
  async (sock, m) => {
    try {
      const ctx = m.msg?.contextInfo;
      if (m.quoted?.id) {
        await sock.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: m.quoted.sender ? jidToNum(m.quoted.sender) === jidToNum(sock.user.id) : false,
            id: m.quoted.id,
            participant: m.quoted.sender,
          },
        });
        return;
      }
      if (ctx?.stanzaId) {
        await sock.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            id: ctx.stanzaId,
            participant: ctx.participant,
            fromMe: false,
          },
        });
        return;
      }
      await m.reply('Reply to a message to delete it.');
    } catch (e) {
      await m.reply(`Delete failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'forward|fwd|frd', desc: 'Forward replied msg to jid(s) (owner)', category: 'owner', fromMe: true, filename: 'owner-extra.js' },
  async (sock, m, { text }) => {
    if (!m.quoted) return m.reply('Reply to a message first.\nUsage: .forward jid1,jid2');
    if (!text) return m.reply('Usage: .forward 120363...@g.us OR number@s.whatsapp.net');
    const jids = text
      .split(',')
      .map((j) => j.trim())
      .filter(Boolean)
      .map((j) => {
        if (j.includes('@')) return j;
        const n = j.replace(/\D/g, '');
        return n ? `${n}@s.whatsapp.net` : null;
      })
      .filter(Boolean);
    if (!jids.length) return m.reply('No valid JIDs.');
    let ok = 0;
    for (const jid of jids) {
      try {
        await sock.sendMessage(jid, { forward: m.quoted.message ? { key: { remoteJid: m.chat, id: m.quoted.id, fromMe: false, participant: m.quoted.sender }, message: m.quoted.message } : undefined });
        // Fallback: re-send text/media body
        if (m.quoted.body) {
          await sock.sendMessage(jid, { text: m.quoted.body });
        } else if (m.quoted.download) {
          const buf = await m.quoted.download();
          const t = m.quoted.type || '';
          if (t.includes('image')) await sock.sendMessage(jid, { image: buf });
          else if (t.includes('video')) await sock.sendMessage(jid, { video: buf });
          else if (t.includes('audio')) await sock.sendMessage(jid, { audio: buf, mimetype: 'audio/mpeg' });
          else await sock.sendMessage(jid, { document: buf, fileName: 'file' });
        }
        ok++;
      } catch (e) {
        console.error('forward', jid, e.message);
      }
    }
    await m.reply(`➡️ Forwarded to ${ok}/${jids.length} chat(s).`);
  }
);

cmd(
  { pattern: 'fullpp|setfullpp', desc: 'Set bot profile picture (owner)', category: 'owner', fromMe: true, filename: 'owner-extra.js' },
  async (sock, m) => {
    try {
      let buffer;
      if (m.quoted?.type === 'imageMessage') buffer = await m.quoted.download();
      else if (m.type === 'imageMessage') buffer = await m.download();
      else return m.reply('Reply to an image.');
      const jid = sock.user.id;
      await sock.updateProfilePicture(jid, buffer);
      await m.reply('✅ Profile picture updated.');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'updatebio|setbio', desc: 'Update bot WhatsApp bio (owner)', category: 'owner', fromMe: true, filename: 'owner-extra.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .updatebio Hello world');
    try {
      await sock.updateProfileStatus(text.slice(0, 139));
      await m.reply('✅ Bio updated.');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'getprivacy|privacy', desc: 'Show current WA privacy snapshot (owner)', category: 'owner', fromMe: true, filename: 'owner-extra.js' },
  async (sock, m) => {
    try {
      const p = await sock.fetchPrivacySettings?.(true).catch(() => null);
      if (!p) {
        return m.reply(
          '🔐 *Privacy helpers*\n' +
            '• .blocklist\n• .getbio @user\n• .fullpp (reply image)\n• .updatebio text\n' +
            '_Detailed privacy enums depend on Baileys version._'
        );
      }
      await m.reply(`🔐 Privacy:\n\`\`\`${JSON.stringify(p, null, 2).slice(0, 3500)}\`\`\``);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);
