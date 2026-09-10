/**
 * Extra search commands (tiktok search, img) from malikmdprivate2.
 */
import axios from 'axios';
import { cmd } from '../command.js';

cmd(
  { pattern: 'tiktoksearch|ttsearch|ttfind', desc: 'Search TikTok videos', category: 'search', filename: 'search-extra.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .tiktoksearch query');
    try {
      await m.react('🔎');
      const { data } = await axios.get(
        `https://api.deline.web.id/search/tiktok?query=${encodeURIComponent(text)}`,
        { timeout: 25000 }
      );
      const list = data?.result || data?.data || [];
      const items = Array.isArray(list) ? list.slice(0, 5) : [];
      if (!items.length) return m.reply('No TikTok results.');
      const body = items
        .map((v, i) => {
          const title = v.title || v.desc || v.caption || 'video';
          const url = v.url || v.link || v.play || '';
          const author = v.author || v.author?.nickname || '';
          return `${i + 1}. *${String(title).slice(0, 80)}*\n👤 ${author}\n🔗 ${url}`;
        })
        .join('\n\n');
      await m.reply(`*TikTok Search*\n\n${body}`);
      const firstPlay = items[0]?.play || items[0]?.video || items[0]?.watermark;
      if (firstPlay) {
        await sock.sendMessage(
          m.chat,
          { video: { url: firstPlay }, caption: '🎵 First result' },
          { quoted: m }
        );
      }
    } catch (e) {
      await m.reply(`tiktoksearch failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'img|gimage|picsearch', desc: 'Image search (Pinterest-backed)', category: 'search', filename: 'search-extra.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .img query');
    try {
      await m.react('🖼️');
      let urls = [];
      try {
        const { data } = await axios.get(
          `https://api.deline.web.id/search/pinterest?q=${encodeURIComponent(text)}`,
          { timeout: 20000 }
        );
        const list = data?.result || data?.data || [];
        urls = (Array.isArray(list) ? list : []).map((x) => x.url || x.image || x).filter(Boolean);
      } catch {
        const { data } = await axios.get(
          `https://api.nexray.eu.cc/search/pinterest?q=${encodeURIComponent(text)}`,
          { timeout: 20000 }
        );
        const list = data?.result || data?.data || [];
        urls = (Array.isArray(list) ? list : []).map((x) => x.url || x.image || x).filter(Boolean);
      }
      if (!urls.length) return m.reply('No images found.');
      for (const url of urls.slice(0, 3)) {
        await sock.sendMessage(m.chat, { image: { url }, caption: `🖼️ ${text}` }, { quoted: m });
      }
    } catch (e) {
      await m.reply(`img search failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'blackbox|bb', desc: 'Ask Blackbox-style AI (public mirror)', category: 'ai', filename: 'search-extra.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .blackbox your question');
    try {
      await m.react('🤖');
      const { data } = await axios.get(
        `https://api.siputzx.my.id/api/ai/blackboxai?query=${encodeURIComponent(text)}`,
        { timeout: 40000 }
      );
      const ans = data?.data || data?.result || data?.response || JSON.stringify(data).slice(0, 3500);
      await m.reply(`🖤 *Blackbox*\n\n${ans}`);
    } catch (e) {
      await m.reply(`blackbox failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'lumin|luminai', desc: 'Lumin AI chat (public API)', category: 'ai', filename: 'search-extra.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .lumin question');
    try {
      await m.react('✨');
      const { data } = await axios.get(
        `https://api.siputzx.my.id/api/ai/luminai?query=${encodeURIComponent(text)}`,
        { timeout: 40000 }
      );
      const ans = data?.data || data?.result || data?.message || 'No response';
      await m.reply(`✨ *Lumin*\n\n${ans}`);
    } catch (e) {
      await m.reply(`lumin failed: ${e.message}`);
    }
  }
);
