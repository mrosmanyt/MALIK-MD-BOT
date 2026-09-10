/**
 * Extra group commands from malikmdprivate2 group-settings / mention-all.
 */
import { cmd } from '../command.js';
import { jidToNum } from '../lib/functions.js';

async function ensureAdmin(sock, m) {
  if (!m.isGroup) {
    await m.reply('Group only.');
    return null;
  }
  const meta = await sock.groupMetadata(m.chat);
  const admins = meta.participants.filter((p) => p.admin).map((p) => p.id);
  const botOk = admins.some((a) => jidToNum(a) === jidToNum(sock.user.id));
  const userOk = admins.some((a) => jidToNum(a) === jidToNum(m.sender)) || m.isOwner;
  if (!userOk) {
    await m.reply('Admins only.');
    return null;
  }
  if (!botOk) {
    await m.reply('I need to be a group admin.');
    return null;
  }
  return meta;
}

cmd(
  { pattern: 'poll|vote|survey', desc: 'Create a poll: Q;opt1,opt2', category: 'group', filename: 'group-extra.js' },
  async (sock, m, { text }) => {
    if (!m.isGroup) return m.reply('Group only.');
    if (!text || !text.includes(';')) {
      return m.reply('Usage: .poll Best color?;Red,Blue,Green');
    }
    const [question, optsRaw] = text.split(';');
    const options = (optsRaw || '')
      .split(',')
      .map((o) => o.trim())
      .filter(Boolean);
    if (!question?.trim() || options.length < 2) return m.reply('Need a question and at least 2 options.');
    if (options.length > 12) return m.reply('Max 12 options.');
    await sock.sendMessage(m.chat, {
      poll: { name: question.trim(), values: options, selectableCount: 1 },
    });
  }
);

cmd(
  { pattern: 'newgc|creategroup|makegroup', desc: 'Create group (owner): Name;num1,num2', category: 'group', fromMe: true, filename: 'group-extra.js' },
  async (sock, m, { text }) => {
    if (!text || !text.includes(';')) {
      return m.reply('Usage: .newgc My Group;923001234567,923009876543');
    }
    const [name, numsRaw] = text.split(';');
    const participants = (numsRaw || '')
      .split(',')
      .map((n) => n.replace(/\D/g, ''))
      .filter((n) => n.length >= 8)
      .map((n) => `${n}@s.whatsapp.net`);
    if (!name?.trim() || !participants.length) return m.reply('Need group name and numbers.');
    try {
      const me = `${jidToNum(sock.user.id)}@s.whatsapp.net`;
      if (!participants.includes(me)) participants.push(me);
      const group = await sock.groupCreate(name.trim(), participants);
      const code = await sock.groupInviteCode(group.id);
      await m.reply(`✅ Group created: *${name.trim()}*\n🔗 https://chat.whatsapp.com/${code}`);
    } catch (e) {
      await m.reply(`newgc failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'everyone|tag', desc: 'Mention everyone with a message', category: 'group', filename: 'group-extra.js' },
  async (sock, m, { text }) => {
    const meta = await ensureAdmin(sock, m);
    if (!meta) return;
    const mentions = meta.participants.map((p) => p.id);
    const msg = text || 'Attention everyone';
    await sock.sendMessage(
      m.chat,
      {
        text: `📢 *${meta.subject}*\n${msg}\n\n${mentions.map((j) => `@${j.split('@')[0]}`).join(' ')}`,
        mentions,
      },
      { quoted: m }
    );
  }
);

cmd(
  { pattern: 'requests|listrequests', desc: 'List pending join requests', category: 'group', filename: 'group-extra.js' },
  async (sock, m) => {
    const meta = await ensureAdmin(sock, m);
    if (!meta) return;
    try {
      const pending = await sock.groupRequestParticipantsList(m.chat);
      if (!pending?.length) return m.reply('No pending requests.');
      const lines = pending.map((p, i) => `${i + 1}. ${p.jid || p.id}`);
      await m.reply(`*Pending requests (${pending.length})*\n${lines.join('\n')}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'accept|approve', desc: 'Approve join request(s)', category: 'group', filename: 'group-extra.js' },
  async (sock, m, { text }) => {
    const meta = await ensureAdmin(sock, m);
    if (!meta) return;
    try {
      const pending = await sock.groupRequestParticipantsList(m.chat);
      let targets = pending.map((p) => p.jid || p.id);
      const num = (text || '').replace(/\D/g, '');
      if (num) targets = targets.filter((j) => j.includes(num));
      if (!targets.length) return m.reply('No matching pending requests. Usage: .accept [number]');
      await sock.groupRequestParticipantsUpdate(m.chat, targets, 'approve');
      await m.reply(`✅ Approved ${targets.length} request(s).`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'reject|decline', desc: 'Reject join request(s)', category: 'group', filename: 'group-extra.js' },
  async (sock, m, { text }) => {
    const meta = await ensureAdmin(sock, m);
    if (!meta) return;
    try {
      const pending = await sock.groupRequestParticipantsList(m.chat);
      let targets = pending.map((p) => p.jid || p.id);
      const num = (text || '').replace(/\D/g, '');
      if (num) targets = targets.filter((j) => j.includes(num));
      if (!targets.length) return m.reply('No matching pending requests.');
      await sock.groupRequestParticipantsUpdate(m.chat, targets, 'reject');
      await m.reply(`✅ Rejected ${targets.length} request(s).`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'acceptall|approveall', desc: 'Approve all join requests', category: 'group', filename: 'group-extra.js' },
  async (sock, m) => {
    const meta = await ensureAdmin(sock, m);
    if (!meta) return;
    try {
      const pending = await sock.groupRequestParticipantsList(m.chat);
      const targets = pending.map((p) => p.jid || p.id);
      if (!targets.length) return m.reply('No pending requests.');
      await sock.groupRequestParticipantsUpdate(m.chat, targets, 'approve');
      await m.reply(`✅ Approved all (${targets.length}).`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'rejectall|declineall', desc: 'Reject all join requests', category: 'group', filename: 'group-extra.js' },
  async (sock, m) => {
    const meta = await ensureAdmin(sock, m);
    if (!meta) return;
    try {
      const pending = await sock.groupRequestParticipantsList(m.chat);
      const targets = pending.map((p) => p.jid || p.id);
      if (!targets.length) return m.reply('No pending requests.');
      await sock.groupRequestParticipantsUpdate(m.chat, targets, 'reject');
      await m.reply(`✅ Rejected all (${targets.length}).`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'gcpp|setgcpp', desc: 'Set group icon from replied image', category: 'group', filename: 'group-extra.js' },
  async (sock, m) => {
    const meta = await ensureAdmin(sock, m);
    if (!meta) return;
    try {
      let buffer;
      if (m.quoted?.type === 'imageMessage') buffer = await m.quoted.download();
      else if (m.type === 'imageMessage') buffer = await m.download();
      else return m.reply('Reply to an image.');
      await sock.updateProfilePicture(m.chat, buffer);
      await m.reply('✅ Group icon updated.');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);
