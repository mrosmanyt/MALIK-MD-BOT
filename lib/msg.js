import { downloadContentFromMessage, getContentType } from '@whiskeysockets/baileys';
import { jidToNum, isOwner as checkOwner } from './functions.js';

async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks);
}

/**
 * Wrap a Baileys message with helpers used by plugins.
 */
export async function serialize(sock, m) {
  if (!m) return m;
  m = { ...m };
  m.sock = sock;
  m.chat = m.key?.remoteJid;
  m.fromMe = !!m.key?.fromMe;
  m.id = m.key?.id;
  m.isGroup = typeof m.chat === 'string' && m.chat.endsWith('@g.us');

  const participant = m.key?.participant || m.participant || m.chat;
  m.sender = m.fromMe ? sock.user?.id : participant;
  m.senderNum = jidToNum(m.sender);
  m.pushName = m.pushName || m.verifiedBizName || 'User';

  const type = getContentType(m.message) || '';
  m.type = type;
  const content = type ? m.message[type] : null;
  m.msg = content;

  m.body =
    m.message?.conversation ||
    m.message?.extendedTextMessage?.text ||
    content?.text ||
    content?.caption ||
    content?.selectedButtonId ||
    content?.selectedDisplayText ||
    '';

  m.quoted = null;
  const ctx = content?.contextInfo;
  if (ctx?.quotedMessage) {
    const qType = getContentType(ctx.quotedMessage);
    m.quoted = {
      type: qType,
      message: ctx.quotedMessage,
      msg: ctx.quotedMessage[qType],
      sender: ctx.participant,
      id: ctx.stanzaId,
      chat: m.chat,
      body:
        ctx.quotedMessage.conversation ||
        ctx.quotedMessage.extendedTextMessage?.text ||
        ctx.quotedMessage[qType]?.caption ||
        ctx.quotedMessage[qType]?.text ||
        '',
      download: async () => {
        const mediaType = (qType || '').replace('Message', '');
        const s = await downloadContentFromMessage(ctx.quotedMessage[qType], mediaType);
        return streamToBuffer(s);
      },
    };
  }

  m.mentionedJid = content?.contextInfo?.mentionedJid || [];
  m.isOwner = checkOwner(m.sender) || m.fromMe;

  m.reply = async (text, opts = {}) =>
    sock.sendMessage(m.chat, { text: String(text), ...opts }, { quoted: m });

  m.react = async (emoji) =>
    sock.sendMessage(m.chat, {
      react: { text: emoji, key: m.key },
    });

  m.download = async () => {
    if (!type || !content) throw new Error('No media');
    const mediaType = type.replace('Message', '');
    const stream = await downloadContentFromMessage(content, mediaType);
    return streamToBuffer(stream);
  };

  return m;
}

export default serialize;
