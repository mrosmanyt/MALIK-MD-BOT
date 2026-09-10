import axios from 'axios';
import * as cheerio from 'cheerio';
import yts from 'yt-search';
import { cmd } from '../command.js';

cmd(
  { pattern: 'google|gsearch', desc: 'Google-ish search via DuckDuckGo HTML', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .google query');
    try {
      const { data: html } = await axios.get('https://html.duckduckgo.com/html/', {
        params: { q: text },
        headers: { 'User-Agent': 'Mozilla/5.0' },
        timeout: 15000,
      });
      const $ = cheerio.load(html);
      const results = [];
      $('.result__a').each((i, el) => {
        if (i >= 5) return;
        results.push(`• *${$(el).text().trim()}*\n${$(el).attr('href')}`);
      });
      if (!results.length) return m.reply('No results.');
      await m.reply(`🔎 *Search:* ${text}\n\n${results.join('\n\n')}`);
    } catch (e) {
      await m.reply(`Search failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'wiki|wikipedia', desc: 'Wikipedia summary', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .wiki Albert Einstein');
    try {
      const { data } = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(text)}`,
        { timeout: 15000 }
      );
      if (data.type === 'disambiguation') return m.reply('Ambiguous title — be more specific.');
      await m.reply(`📚 *${data.title}*\n\n${data.extract}\n\n🔗 ${data.content_urls?.desktop?.page || ''}`);
    } catch {
      await m.reply('Article not found.');
    }
  }
);

cmd(
  { pattern: 'npm', desc: 'NPM package info', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .npm express');
    try {
      const { data } = await axios.get(`https://registry.npmjs.org/${encodeURIComponent(text)}`, {
        timeout: 15000,
      });
      const ver = data['dist-tags']?.latest;
      const meta = data.versions?.[ver] || {};
      await m.reply(
        `📦 *${data.name}*@${ver}\n${meta.description || data.description || '-'}\n🔗 https://www.npmjs.com/package/${data.name}`
      );
    } catch {
      await m.reply('Package not found.');
    }
  }
);

cmd(
  { pattern: 'anime', desc: 'Anime search (Jikan)', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .anime Naruto');
    try {
      const { data } = await axios.get('https://api.jikan.moe/v4/anime', {
        params: { q: text, limit: 1 },
        timeout: 15000,
      });
      const a = data.data?.[0];
      if (!a) return m.reply('Not found.');
      const caption = `🎌 *${a.title}*\n⭐ ${a.score || '-'} · Episodes: ${a.episodes || '-'}\n${(a.synopsis || '').slice(0, 500)}`;
      if (a.images?.jpg?.image_url) {
        await sock.sendMessage(m.chat, { image: { url: a.images.jpg.image_url }, caption }, { quoted: m });
      } else await m.reply(caption);
    } catch (e) {
      await m.reply(`Anime search failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'manga', desc: 'Manga search (Jikan)', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .manga One Piece');
    try {
      const { data } = await axios.get('https://api.jikan.moe/v4/manga', {
        params: { q: text, limit: 1 },
        timeout: 15000,
      });
      const a = data.data?.[0];
      if (!a) return m.reply('Not found.');
      await m.reply(`📖 *${a.title}*\n⭐ ${a.score || '-'}\n${(a.synopsis || '').slice(0, 600)}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'movie|omdb', desc: 'Movie info (OMDb free key optional)', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .movie Inception');
    try {
      // OMDb demo may rate-limit; also try TVMaze as fallback for series
      const { data } = await axios.get('https://api.tvmaze.com/search/shows', {
        params: { q: text },
        timeout: 15000,
      });
      const show = data?.[0]?.show;
      if (!show) return m.reply('Not found.');
      const caption = `🎬 *${show.name}*\n${show.genres?.join(', ') || ''}\n⭐ ${show.rating?.average || '-'}\n${(show.summary || '').replace(/<[^>]+>/g, '').slice(0, 500)}`;
      if (show.image?.medium) {
        await sock.sendMessage(m.chat, { image: { url: show.image.medium }, caption }, { quoted: m });
      } else await m.reply(caption);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'lyricssearch|song', desc: 'Find song via yt-search', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .song shape of you');
    try {
      const r = await yts(text);
      const v = r.videos?.[0];
      if (!v) return m.reply('No results.');
      await m.reply(`🎵 *${v.title}*\n👤 ${v.author.name}\n⏱ ${v.timestamp}\n🔗 ${v.url}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'pinterest|pin', desc: 'Pinterest image search (best-effort)', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .pin cats');
    try {
      const { data } = await axios.get(
        `https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(text)}`,
        { timeout: 20000 }
      );
      const img = data?.data?.[0] || data?.result?.[0];
      const url = typeof img === 'string' ? img : img?.url || img?.image;
      if (!url) return m.reply('No images / API unavailable.');
      await sock.sendMessage(m.chat, { image: { url }, caption: `📌 ${text}` }, { quoted: m });
    } catch (e) {
      await m.reply(`Pinterest failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'wallpaper|wp', desc: 'Wallpaper search', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .wp nature');
    try {
      const { data } = await axios.get(
        `https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(text + ' wallpaper')}`,
        { timeout: 20000 }
      );
      const img = data?.data?.[0] || data?.result?.[0];
      const url = typeof img === 'string' ? img : img?.url || img?.image;
      if (!url) return m.reply('No wallpaper found.');
      await sock.sendMessage(m.chat, { image: { url }, caption: `🖼️ ${text}` }, { quoted: m });
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'crypto|btc', desc: 'Crypto price (CoinGecko)', category: 'search', filename: 'search.js' },
  async (sock, m, { args }) => {
    const id = (args[0] || 'bitcoin').toLowerCase();
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price`,
        { params: { ids: id, vs_currencies: 'usd,pkr' }, timeout: 15000 }
      );
      if (!data[id]) return m.reply('Coin not found. Try bitcoin, ethereum, solana...');
      await m.reply(`💰 *${id}*\nUSD: $${data[id].usd}\nPKR: ${data[id].pkr}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'currency|forex', desc: 'Currency convert (frankfurter)', category: 'search', filename: 'search.js' },
  async (sock, m, { args }) => {
    const amount = Number(args[0]) || 1;
    const from = (args[1] || 'USD').toUpperCase();
    const to = (args[2] || 'PKR').toUpperCase();
    try {
      const { data } = await axios.get(`https://api.frankfurter.app/latest`, {
        params: { amount, from, to },
        timeout: 10000,
      });
      await m.reply(`💱 ${amount} ${from} = *${data.rates[to]} ${to}*`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'news', desc: 'Top headlines (Google News RSS via JSON)', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    try {
      const q = text || 'technology';
      const { data } = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_test&q=${encodeURIComponent(q)}&language=en`,
        { timeout: 10000, validateStatus: () => true }
      );
      // free key often fails — fallback to HN
      const { data: hn } = await axios.get(
        'https://hn.algolia.com/api/v1/search?tags=front_page',
        { timeout: 10000 }
      );
      const hits = (hn.hits || []).slice(0, 5);
      await m.reply(
        `📰 *Headlines*\n\n` +
          hits.map((h, i) => `${i + 1}. ${h.title}\n${h.url || ''}`).join('\n\n')
      );
    } catch (e) {
      await m.reply(`News failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'urbandict|ud', desc: 'Urban Dictionary', category: 'search', filename: 'search.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .ud yeet');
    try {
      const { data } = await axios.get(
        `https://api.urbandictionary.com/v0/define`,
        { params: { term: text }, timeout: 15000 }
      );
      const d = data.list?.[0];
      if (!d) return m.reply('No definition.');
      await m.reply(`📘 *${d.word}*\n${d.definition}\n\n_Ex:_ ${d.example || '-'}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);
