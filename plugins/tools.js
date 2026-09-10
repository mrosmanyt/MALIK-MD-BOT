import axios from 'axios';
import { randomUUID } from 'crypto';
import { translate } from '@vitalets/google-translate-api';
import { cmd } from '../command.js';
import { getBuffer, fetchJson, toFancy } from '../lib/functions.js';

cmd(
  { pattern: 'translate|tr', desc: 'Translate text', category: 'tools', filename: 'tools.js' },
  async (sock, m, { args, text }) => {
    const lang = args[0] || 'en';
    const body = args.slice(1).join(' ') || m.quoted?.body;
    if (!body) return m.reply('Usage: .tr es Hello');
    try {
      const res = await translate(body, { to: lang });
      await m.reply(`🌐 *${lang}*\n${res.text}`);
    } catch (e) {
      await m.reply(`Translate failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'define|dict', desc: 'Dictionary definition', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .define word');
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(text)}`,
        { timeout: 15000 }
      );
      const entry = data[0];
      const meaning = entry.meanings?.[0];
      const def = meaning?.definitions?.[0]?.definition;
      await m.reply(
        `📖 *${entry.word}*\n/${entry.phonetic || ''}/\n*${meaning?.partOfSpeech || ''}*\n${def || 'No definition'}`
      );
    } catch {
      await m.reply('Word not found.');
    }
  }
);

cmd(
  { pattern: 'github|gh', desc: 'GitHub user/repo info', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .github username OR user/repo');
    try {
      if (text.includes('/')) {
        const { data } = await axios.get(`https://api.github.com/repos/${text}`, { timeout: 15000 });
        await m.reply(
          `📦 *${data.full_name}*\n⭐ ${data.stargazers_count} · 🍴 ${data.forks_count}\n📝 ${data.description || '-'}\n🔗 ${data.html_url}`
        );
      } else {
        const { data } = await axios.get(`https://api.github.com/users/${text}`, { timeout: 15000 });
        await m.reply(
          `👤 *${data.login}*\n📛 ${data.name || '-'}\n📝 ${data.bio || '-'}\nrepos: ${data.public_repos} · followers: ${data.followers}\n🔗 ${data.html_url}`
        );
      }
    } catch (e) {
      await m.reply(`GitHub error: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'weather|wtr', desc: 'Weather by city (wttr.in)', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .weather London');
    try {
      const { data } = await axios.get(
        `https://wttr.in/${encodeURIComponent(text)}?format=j1`,
        { timeout: 15000 }
      );
      const cur = data.current_condition?.[0];
      const area = data.nearest_area?.[0]?.areaName?.[0]?.value || text;
      await m.reply(
        `🌤️ *${area}*\n${cur.weatherDesc?.[0]?.value}\n🌡️ ${cur.temp_C}°C (feels ${cur.FeelsLikeC}°C)\n💧 Humidity ${cur.humidity}%\n💨 Wind ${cur.windspeedKmph} km/h`
      );
    } catch (e) {
      await m.reply(`Weather failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'calc|calculate', desc: 'Safe calculator', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .calc 2+2*5');
    if (!/^[\d\s+\-*/().%]+$/.test(text)) return m.reply('Only numbers and + - * / ( ) % allowed.');
    try {
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${text})`)();
      await m.reply(`🧮 ${text} = *${result}*`);
    } catch {
      await m.reply('Invalid expression.');
    }
  }
);

cmd(
  { pattern: 'base64', desc: 'Encode/decode base64', category: 'tools', filename: 'tools.js' },
  async (sock, m, { args, text }) => {
    const mode = (args[0] || '').toLowerCase();
    const payload = args.slice(1).join(' ') || m.quoted?.body;
    if (!['enc', 'dec', 'encode', 'decode'].includes(mode) || !payload) {
      return m.reply('Usage: .base64 enc|dec text');
    }
    if (mode.startsWith('enc')) await m.reply(Buffer.from(payload).toString('base64'));
    else await m.reply(Buffer.from(payload, 'base64').toString('utf8'));
  }
);

cmd(
  { pattern: 'qr', desc: 'Generate QR image URL', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .qr text');
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(text)}`;
    await sock.sendMessage(m.chat, { image: { url }, caption: 'QR' }, { quoted: m });
  }
);

cmd(
  { pattern: 'short|shorten', desc: 'Shorten URL (is.gd)', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .short https://example.com');
    try {
      const { data } = await axios.get(
        `https://is.gd/create.php?format=simple&url=${encodeURIComponent(text)}`,
        { timeout: 10000 }
      );
      await m.reply(`🔗 ${data}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'ss|screenshot', desc: 'Website screenshot (thum.io)', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .ss https://example.com');
    const url = text.startsWith('http') ? text : `https://${text}`;
    const shot = `https://image.thum.io/get/width/1200/crop/800/${url}`;
    await sock.sendMessage(m.chat, { image: { url: shot }, caption: url }, { quoted: m });
  }
);

cmd(
  { pattern: 'ip', desc: 'IP / domain lookup', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .ip 8.8.8.8');
    try {
      const { data } = await axios.get(`https://ipapi.co/${encodeURIComponent(text)}/json/`, {
        timeout: 10000,
      });
      if (data.error) return m.reply(String(data.reason || data.error));
      await m.reply(
        `🌐 ${data.ip}\n📍 ${data.city}, ${data.region}, ${data.country_name}\n🏢 ${data.org || '-'}\n🕒 ${data.timezone || '-'}`
      );
    } catch (e) {
      await m.reply(`Lookup failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'uuid', desc: 'Generate UUID', category: 'tools', filename: 'tools.js' },
  async (sock, m) => {
    const id = randomUUID();
    await m.reply(`🆔 ${id}`);
  }
);

cmd(
  { pattern: 'encodeuri|urlenc', desc: 'URL encode', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .urlenc text');
    await m.reply(encodeURIComponent(text));
  }
);

cmd(
  { pattern: 'decodeuri|urldec', desc: 'URL decode', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .urldec text');
    await m.reply(decodeURIComponent(text));
  }
);

cmd(
  { pattern: 'hash', desc: 'SHA-256 hash text', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .hash text');
    const { createHash } = await import('crypto');
    await m.reply(createHash('sha256').update(text).digest('hex'));
  }
);

cmd(
  { pattern: 'tts', desc: 'Google TTS audio', category: 'tools', filename: 'tools.js' },
  async (sock, m, { args, text }) => {
    const lang = args[0]?.length === 2 ? args[0] : 'en';
    const body = args[0]?.length === 2 ? args.slice(1).join(' ') : text;
    if (!body) return m.reply('Usage: .tts en Hello world');
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
      body.slice(0, 200)
    )}&tl=${lang}&client=tw-ob`;
    try {
      const buf = await getBuffer(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      await sock.sendMessage(
        m.chat,
        { audio: buf, mimetype: 'audio/mp4', ptt: true },
        { quoted: m }
      );
    } catch (e) {
      await m.reply(`TTS failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'removebg|nobg', desc: 'Explain remove.bg requirement', category: 'tools', filename: 'tools.js' },
  async (sock, m) => {
    await m.reply(
      'Background removal needs a REMOVE_BG_API_KEY from remove.bg. Not bundled by default — reply to an image after setting the key in a future update, or use an external editor.'
    );
  }
);

cmd(
  { pattern: 'fetch|get', desc: 'GET URL and show snippet', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    if (!text || !/^https?:\/\//i.test(text)) return m.reply('Usage: .fetch https://...');
    try {
      const { data, headers } = await axios.get(text, { timeout: 15000, transformResponse: [(d) => d] });
      const snippet = String(data).slice(0, 1500);
      await m.reply(`HTTP OK\nType: ${headers['content-type'] || '?'}\n\n\`\`\`\n${snippet}\n\`\`\``);
    } catch (e) {
      await m.reply(`Fetch failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'carbon', desc: 'Carbon code image link helper', category: 'tools', filename: 'tools.js' },
  async (sock, m, { text }) => {
    const code = text || m.quoted?.body;
    if (!code) return m.reply('Usage: .carbon code');
    const url = `https://carbonnowsh.herokuapp.com/?code=${encodeURIComponent(code.slice(0, 1500))}`;
    try {
      await sock.sendMessage(m.chat, { image: { url }, caption: 'Carbon' }, { quoted: m });
    } catch {
      await m.reply(`Open: ${url}`);
    }
  }
);
