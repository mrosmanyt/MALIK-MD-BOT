import config from '../config.js';
import { cmd } from '../command.js';
import { jidToNum, parseMention } from '../lib/functions.js';
import { setGroupFlag, isMongoReady } from '../lib/db.js';

async function groupMeta(sock, jid) {
  return sock.groupMetadata(jid);
}

function adminIds(meta) {
  return meta.participants.filter((p) => p.admin).map((p) => p.id);
}

function isAdminId(meta, jid) {
  const n = jidToNum(jid);
  return adminIds(meta).some((a) => jidToNum(a) === n);
}

async function ensureGroupAdmin(sock, m) {
  if (!m.isGroup) {
    await m.reply('Group only.');
    return null;
  }
  const meta = await groupMeta(sock, m.chat);
  const botAdmin = isAdminId(meta, sock.user.id);
  const userAdmin = isAdminId(meta, m.sender) || m.isOwner;
  if (!userAdmin) {
    await m.reply('Admins only.');
    return null;
  }
  if (!botAdmin) {
    await m.reply('I need to be a group admin.');
    return null;
  }
  return meta;
}

function targetJids(m, text) {
  const list = [];
  if (m.mentionedJid?.length) list.push(...m.mentionedJid);
  if (m.quoted?.sender) list.push(m.quoted.sender);
  const nums = (text || '').match(/\d{8,16}/g) || [];
  for (const n of nums) list.push(`${n}@s.whatsapp.net`);
  return [...new Set(list)];
}

cmd(
  { pattern: 'promote', desc: 'Promote member to admin', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    const targets = targetJids(m, text);
    if (!targets.length) return m.reply('Tag/reply a user.');
    await sock.groupParticipantsUpdate(m.chat, targets, 'promote');
    await m.reply('✅ Promoted.');
  }
);

cmd(
  { pattern: 'demote', desc: 'Demote group admin', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    const targets = targetJids(m, text);
    if (!targets.length) return m.reply('Tag/reply a user.');
    await sock.groupParticipantsUpdate(m.chat, targets, 'demote');
    await m.reply('✅ Demoted.');
  }
);

cmd(
  { pattern: 'kick|remove', desc: 'Remove member', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    const targets = targetJids(m, text);
    if (!targets.length) return m.reply('Tag/reply a user.');
    await sock.groupParticipantsUpdate(m.chat, targets, 'remove');
    await m.reply('✅ Removed.');
  }
);

cmd(
  { pattern: 'add', desc: 'Add number to group', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    const num = (text || '').replace(/\D/g, '');
    if (num.length < 8) return m.reply('Usage: .add 923xxxxxxx');
    try {
      await sock.groupParticipantsUpdate(m.chat, [`${num}@s.whatsapp.net`], 'add');
      await m.reply('✅ Add request sent (WhatsApp may require invite).');
    } catch (e) {
      await m.reply(`Failed to add: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'tagall|all', desc: 'Mention all members', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    if (!m.isGroup) return m.reply('Group only.');
    const meta = await groupMeta(sock, m.chat);
    if (!isAdminId(meta, m.sender) && !m.isOwner) return m.reply('Admins only.');
    const mentions = meta.participants.map((p) => p.id);
    const lines = mentions.map((j, i) => `${i + 1}. @${jidToNum(j)}`);
    const msg = `${text || '📢 Tag All'}\n\n${lines.join('\n')}`;
    await sock.sendMessage(m.chat, { text: msg, mentions }, { quoted: m });
  }
);

cmd(
  { pattern: 'hidetag|htag', desc: 'Hidden mention all', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    if (!m.isGroup) return m.reply('Group only.');
    const meta = await groupMeta(sock, m.chat);
    if (!isAdminId(meta, m.sender) && !m.isOwner) return m.reply('Admins only.');
    const mentions = meta.participants.map((p) => p.id);
    await sock.sendMessage(m.chat, { text: text || '​​', mentions }, { quoted: m });
  }
);

cmd(
  { pattern: 'groupinfo|ginfo', desc: 'Group metadata', category: 'group', filename: 'group.js' },
  async (sock, m) => {
    if (!m.isGroup) return m.reply('Group only.');
    const meta = await groupMeta(sock, m.chat);
    const admins = adminIds(meta);
    await m.reply(
      `*Group Info*\n• Name: ${meta.subject}\n• ID: ${meta.id}\n• Members: ${meta.participants.length}\n• Admins: ${admins.length}\n• Desc: ${(meta.desc || '-').slice(0, 400)}`
    );
  }
);

cmd(
  { pattern: 'invite|link', desc: 'Get invite link', category: 'group', filename: 'group.js' },
  async (sock, m) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    const code = await sock.groupInviteCode(m.chat);
    await m.reply(`https://chat.whatsapp.com/${code}`);
  }
);

cmd(
  { pattern: 'revoke|resetlink', desc: 'Reset invite link', category: 'group', filename: 'group.js' },
  async (sock, m) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    await sock.groupRevokeInvite(m.chat);
    const code = await sock.groupInviteCode(m.chat);
    await m.reply(`New link:\nhttps://chat.whatsapp.com/${code}`);
  }
);

cmd(
  { pattern: 'setname|gname', desc: 'Set group subject', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    if (!text) return m.reply('Usage: .setname New Name');
    await sock.groupUpdateSubject(m.chat, text);
    await m.reply('✅ Group name updated.');
  }
);

cmd(
  { pattern: 'setdesc|gdesc', desc: 'Set group description', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    if (!text) return m.reply('Usage: .setdesc text');
    await sock.groupUpdateDescription(m.chat, text);
    await m.reply('✅ Description updated.');
  }
);

cmd(
  { pattern: 'mute|lock', desc: 'Close group (admins only chat)', category: 'group', filename: 'group.js' },
  async (sock, m) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    await sock.groupSettingUpdate(m.chat, 'announcement');
    await m.reply('🔒 Group muted (admins only).');
  }
);

cmd(
  { pattern: 'unmute|unlock', desc: 'Open group chat', category: 'group', filename: 'group.js' },
  async (sock, m) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    await sock.groupSettingUpdate(m.chat, 'not_announcement');
    await m.reply('🔓 Group unmuted.');
  }
);

cmd(
  { pattern: 'antilink', desc: 'Toggle antilink on/off', category: 'group', filename: 'group.js' },
  async (sock, m, { args }) => {
    const meta = await ensureGroupAdmin(sock, m);
    if (!meta) return;
    const v = (args[0] || '').toLowerCase();
    if (!['on', 'off'].includes(v)) return m.reply('Usage: .antilink on|off');
    const enabled = v === 'on';
    if (isMongoReady()) await setGroupFlag(m.chat, 'antilink', enabled);
    else m.antilinkLocal?.set(m.chat, enabled);
    await m.reply(`Antilink: *${enabled ? 'ON' : 'OFF'}*`);
  }
);

cmd(
  { pattern: 'leave|left', desc: 'Bot leaves group (owner)', category: 'group', fromMe: true, filename: 'group.js' },
  async (sock, m) => {
    if (!m.isGroup) return m.reply('Group only.');
    await m.reply('Bye 👋');
    await sock.groupLeave(m.chat);
  }
);

cmd(
  { pattern: 'admins|listadmin', desc: 'List group admins', category: 'group', filename: 'group.js' },
  async (sock, m) => {
    if (!m.isGroup) return m.reply('Group only.');
    const meta = await groupMeta(sock, m.chat);
    const admins = adminIds(meta);
    const text = admins.map((j, i) => `${i + 1}. @${jidToNum(j)}`).join('\n');
    await sock.sendMessage(m.chat, { text: `*Admins*\n${text}`, mentions: admins }, { quoted: m });
  }
);

cmd(
  { pattern: 'hidetagadmin|tagadmins', desc: 'Tag only admins', category: 'group', filename: 'group.js' },
  async (sock, m, { text }) => {
    if (!m.isGroup) return m.reply('Group only.');
    const meta = await groupMeta(sock, m.chat);
    if (!isAdminId(meta, m.sender) && !m.isOwner) return m.reply('Admins only.');
    const admins = adminIds(meta);
    await sock.sendMessage(
      m.chat,
      { text: text || 'Admin ping', mentions: admins },
      { quoted: m }
    );
  }
);

cmd(
  { pattern: 'join', desc: 'Join group via invite link (owner)', category: 'group', fromMe: true, filename: 'group.js' },
  async (sock, m, { text }) => {
    const code = (text || '').replace('https://chat.whatsapp.com/', '').trim();
    if (!code) return m.reply('Usage: .join <invite-link>');
    try {
      const id = await sock.groupAcceptInvite(code);
      await m.reply(`Joined: ${id}`);
    } catch (e) {
      await m.reply(`Join failed: ${e.message}`);
    }
  }
);
