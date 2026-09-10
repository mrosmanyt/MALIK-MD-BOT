/**
 * Extra tools from malikmdprivate2 (tool-id, tool-new, utility, tools image enhance).
 */
import axios from 'axios';
import crypto from 'crypto';
import { cmd } from '../command.js';
import { jidToNum } from '../lib/functions.js';

cmd(
  { pattern: 'id|getlid|jid', desc: 'Show chat / user JIDs', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m) => {
    const target = m.quoted?.sender || m.mentionedJid?.[0] || m.sender;
    await m.reply(
      `*IDs*\n• Chat: \`${m.chat}\`\n• You: \`${m.sender}\`\n• Target: \`${target}\`\n• Group: ${m.isGroup ? 'yes' : 'no'}`
    );
  }
);

cmd(
  { pattern: 'getbio|bio', desc: 'Get status/bio of a user', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m) => {
    try {
      const jid = m.quoted?.sender || m.mentionedJid?.[0] || m.sender;
      const status = await sock.fetchStatus(jid).catch(() => null);
      if (!status?.status) return m.reply('No bio / status available.');
      await m.reply(`📝 Bio of ${jidToNum(jid)}:\n${status.status}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'surah|quran', desc: 'Quran surah audio (1-114)', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m, { text }) => {
    const n = parseInt(text, 10);
    if (!n || n < 1 || n > 114) return m.reply('Usage: .surah 1-114');
    try {
      await m.react('📖');
      const url = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${n}.mp3`;
      await sock.sendMessage(
        m.chat,
        { audio: { url }, mimetype: 'audio/mpeg', fileName: `SURAH-${n}.mp3` },
        { quoted: m }
      );
    } catch (e) {
      await m.reply(`surah failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'praytime|prayertimes|ptime', desc: 'Islamic prayer times for a city', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m, { text }) => {
    const city = (text || 'Karachi').trim();
    try {
      await m.react('🕌');
      // Aladhan (no key)
      const { data } = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=&method=1`,
        { timeout: 15000 }
      );
      const t = data?.data?.timings;
      const date = data?.data?.date?.readable;
      if (!t) return m.reply('Could not fetch prayer times.');
      await m.reply(
        `🕌 *Prayer times — ${city}*\n📅 ${date || ''}\n\n` +
          `🌅 Fajr: ${t.Fajr}\n☀️ Dhuhr: ${t.Dhuhr}\n🌤 Asr: ${t.Asr}\n` +
          `🌇 Maghrib: ${t.Maghrib}\n🌙 Isha: ${t.Isha}\n\n` +
          `⏳ Sunrise: ${t.Sunrise}`
      );
    } catch (e) {
      await m.reply(`praytime failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'githubstalk|ghuser', desc: 'GitHub user stalk / info', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .githubstalk username');
    try {
      const { data } = await axios.get(`https://api.github.com/users/${encodeURIComponent(text.trim())}`, {
        timeout: 15000,
        headers: { 'User-Agent': 'MALIK-MD-BOT' },
      });
      const caption =
        `👤 *${data.login}*\n` +
        `• Name: ${data.name || '-'}\n` +
        `• Bio: ${data.bio || '-'}\n` +
        `• Followers: ${data.followers} · Following: ${data.following}\n` +
        `• Repos: ${data.public_repos}\n` +
        `• Location: ${data.location || '-'}\n` +
        `🔗 ${data.html_url}`;
      if (data.avatar_url) {
        await sock.sendMessage(m.chat, { image: { url: data.avatar_url }, caption }, { quoted: m });
      } else await m.reply(caption);
    } catch (e) {
      await m.reply(`Not found / error: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'gpass|genpass', desc: 'Generate strong password', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m, { args }) => {
    const length = Math.min(Math.max(parseInt(args[0], 10) || 12, 8), 64);
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) password += charset[crypto.randomInt(0, charset.length)];
    await m.reply(`🔐 Strong password (${length}):\n\`${password}\``);
  }
);

cmd(
  { pattern: 'getimage|url2image', desc: 'Send image from direct URL', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m, { text }) => {
    if (!text || !/^https?:\/\//i.test(text)) return m.reply('Usage: .getimage https://.../image.jpg');
    try {
      await sock.sendMessage(m.chat, { image: { url: text.trim() }, caption: '🖼️' }, { quoted: m });
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'srepo|repodetail', desc: 'GitHub repo details', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m, { text }) => {
    if (!text || !text.includes('/')) return m.reply('Usage: .srepo owner/repo');
    try {
      const { data } = await axios.get(`https://api.github.com/repos/${text.trim()}`, {
        timeout: 15000,
        headers: { 'User-Agent': 'MALIK-MD-BOT' },
      });
      await m.reply(
        `📦 *${data.full_name}*\n⭐ ${data.stargazers_count} · 🍴 ${data.forks_count}\n` +
          `📝 ${data.description || '-'}\n🔗 ${data.html_url}\n💻 ${data.language || '-'}`
      );
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

async function uploadTemp(buffer) {
  const FormData = (await import('form-data')).default;
  const form = new FormData();
  form.append('reqtype', 'fileupload');
  form.append('time', '1h');
  form.append('fileToUpload', buffer, { filename: 'img.jpg' });
  const { data } = await axios.post('https://litterbox.catbox.moe/resources/internals/api.php', form, {
    headers: form.getHeaders(),
    timeout: 60000,
  });
  return String(data).trim();
}

async function enhanceVia(sock, m, pathTpl, label) {
  try {
    let buffer;
    if (m.quoted?.type === 'imageMessage') buffer = await m.quoted.download();
    else if (m.type === 'imageMessage') buffer = await m.download();
    else return m.reply('Reply to an image.');
    await m.react('✨');
    const link = await uploadTemp(buffer);
    const api = pathTpl.replace('{url}', encodeURIComponent(link));
    const { data } = await axios.get(api, { timeout: 60000 });
    const out = data?.result || data?.url || data?.data?.url || data?.image;
    if (!out) return m.reply(`${label}: no result from API.`);
    const outUrl = typeof out === 'string' ? out : out.url;
    await sock.sendMessage(m.chat, { image: { url: outUrl }, caption: `✨ ${label}` }, { quoted: m });
  } catch (e) {
    await m.reply(`${label} failed: ${e.message}`);
  }
}

cmd(
  { pattern: 'remini|enhance|upscale', desc: 'Enhance / upscale replied image', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m) =>
    enhanceVia(sock, m, 'https://api.nexray.web.id/tools/remini?url={url}', 'Remini')
);

cmd(
  { pattern: 'unblur', desc: 'Unblur replied image', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m) =>
    enhanceVia(sock, m, 'https://api.nexray.web.id/tools/unblur?url={url}', 'Unblur')
);

cmd(
  { pattern: 'colorize', desc: 'Colorize replied image', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m) =>
    enhanceVia(sock, m, 'https://api.nexray.web.id/tools/colorize?url={url}', 'Colorize')
);

cmd(
  { pattern: 'removebg2|nobg2', desc: 'Alternate remove-background', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m) =>
    enhanceVia(sock, m, 'https://api.nexray.web.id/tools/removebg?url={url}', 'Remove BG')
);

cmd(
  { pattern: 'font|fancyall|stylish', desc: 'Show text in multiple fancy fonts', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .font hello');
    const maps = [
      (c) => {
        const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const fancy = '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇';
        const i = base.indexOf(c);
        return i >= 0 ? fancy[i] : c;
      },
      (c) => {
        const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const fancy = '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻';
        const i = base.indexOf(c);
        return i >= 0 ? fancy[i] : c;
      },
      (c) => {
        const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const fancy = '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫';
        const i = base.indexOf(c);
        return i >= 0 ? fancy[i] : c;
      },
      (c) => {
        const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const fancy = '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣';
        const i = base.indexOf(c);
        return i >= 0 ? fancy[i] : c;
      },
    ];
    const lines = maps.map((fn, i) => `${i + 1}. ${[...text].map(fn).join('')}`);
    await m.reply(`✨ *Fancy fonts*\n\n${lines.join('\n')}`);
  }
);

cmd(
  { pattern: 'repeat', desc: 'Repeat text N times', category: 'tools', filename: 'tools-extra.js' },
  async (sock, m, { args, text }) => {
    const n = Math.min(parseInt(args[0], 10) || 0, 30);
    const body = args.slice(1).join(' ') || m.quoted?.body;
    if (!n || !body) return m.reply('Usage: .repeat 5 hello');
    await m.reply(Array(n).fill(body).join('\n'));
  }
);

// silence unused import warning path
