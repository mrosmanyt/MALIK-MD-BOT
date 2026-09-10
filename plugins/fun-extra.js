/**
 * Fun extras from malikmdprivate2 (fun.js / fun-extra.js) — adapted to MALIK handler API.
 */
import axios from 'axios';
import { Sticker, StickerTypes } from 'wa-sticker-formatter';
import { cmd } from '../command.js';
import config from '../config.js';
import { getBuffer, pick } from '../lib/functions.js';

cmd(
  { pattern: 'emix', desc: 'Combine two emojis into a sticker', category: 'fun', filename: 'fun-extra.js' },
  async (sock, m, { text }) => {
    if (!text || !text.includes(',')) return m.reply('Usage: .emix 😂,🙂');
    const [e1, e2] = text.split(',').map((s) => s.trim());
    if (!e1 || !e2) return m.reply('Need two emojis separated by a comma.');
    try {
      await m.react('😃');
      const api = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuHQpmKSc_KlIrw&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(e1)}_${encodeURIComponent(e2)}`;
      let imageUrl;
      try {
        const { data } = await axios.get(api, { timeout: 15000 });
        imageUrl = data?.results?.[0]?.url;
      } catch {
        imageUrl = `https://api.popcat.xyz/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`;
      }
      if (!imageUrl) return m.reply('Could not mix those emojis.');
      const buffer = await getBuffer(imageUrl);
      const sticker = new Sticker(buffer, {
        pack: config.PACK_NAME,
        author: config.PACK_AUTHOR,
        type: StickerTypes.FULL,
        quality: 75,
      });
      await sock.sendMessage(m.chat, { sticker: await sticker.toBuffer() }, { quoted: m });
    } catch (e) {
      await m.reply(`emix failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'aura', desc: 'Aura score for a user', category: 'fun', filename: 'fun-extra.js' },
  async (sock, m) => {
    const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
    const score = Math.floor(Math.random() * 1000) + 1;
    await sock.sendMessage(
      m.chat,
      { text: `💀 Aura of @${jid.split('@')[0]}: *${score}/1000*`, mentions: [jid] },
      { quoted: m }
    );
  }
);

cmd(
  { pattern: 'roast', desc: 'Playful roast (harmless)', category: 'fun', filename: 'fun-extra.js' },
  async (sock, m, { text }) => {
    const lines = [
      'You’re proof that evolution can go in reverse.',
      'I’d explain it to you, but I left my crayons at home.',
      'You bring everyone happiness… when you leave.',
      'Somewhere a circuit is jealous of how much voltage you waste.',
      'Your Wi-Fi password is stronger than your arguments.',
    ];
    const who = text || m.pushName || 'friend';
    await m.reply(`🔥 ${who}: ${pick(lines)}`);
  }
);

cmd(
  { pattern: 'lovetest|lovemeter', desc: 'Love meter between two names', category: 'fun', filename: 'fun-extra.js' },
  async (sock, m, { args }) => {
    const a = args[0] || m.pushName;
    const b = args[1] || 'someone';
    const pct = Math.floor(Math.random() * 101);
    await m.reply(`❤️ *${a}* × *${b}*\nLove score: *${pct}%*`);
  }
);

cmd(
  { pattern: 'emoji|emojify2', desc: 'Random emoji reaction text', category: 'fun', filename: 'fun-extra.js' },
  async (sock, m, { text }) => {
    const pool = ['😀', '🔥', '✨', '💀', '🫶', '⚡', '🌈', '🎯', '🧠', '😎'];
    if (!text) return m.reply('Usage: .emoji hello world');
    await m.reply(text.split(/\s+/).map((w) => `${w}${pick(pool)}`).join(' '));
  }
);

const relations = [
  'dad', 'mom', 'son', 'daughter', 'boyfriend', 'girlfriend', 'twin', 'partner',
  'bestfriend', 'enemy', 'crush', 'teacher', 'student', 'king', 'queen', 'angel', 'devil',
];
for (const rel of relations) {
  cmd(
    {
      pattern: rel,
      desc: `Fun ${rel} ship meter`,
      category: 'fun',
      filename: 'fun-extra.js',
      dontAddCommandList: rel !== 'crush' && rel !== 'bestfriend',
    },
    async (sock, m) => {
      const jid = m.mentionedJid?.[0] || m.quoted?.sender;
      if (!jid) return m.reply(`Tag or reply to someone.\nUsage: .${rel} @user`);
      const pct = Math.floor(Math.random() * 101);
      await sock.sendMessage(
        m.chat,
        {
          text: `🔗 @${m.senderNum} → *${rel}* of @${jid.split('@')[0]}\nScore: *${pct}%*`,
          mentions: [m.sender, jid],
        },
        { quoted: m }
      );
    }
  );
}

cmd(
  { pattern: 'cosplay', desc: 'Random cosplay image (API)', category: 'fun', filename: 'fun-extra.js' },
  async (sock, m) => {
    try {
      await m.react('🎭');
      const { data } = await axios.get('https://rynekoo-api.hf.space/random/cosplay', { timeout: 20000 });
      const url = data?.url || data?.result || data?.image;
      if (!url) return m.reply('No cosplay image.');
      await sock.sendMessage(m.chat, { image: { url }, caption: '🎭 Cosplay' }, { quoted: m });
    } catch (e) {
      await m.reply(`cosplay failed: ${e.message}`);
    }
  }
);
