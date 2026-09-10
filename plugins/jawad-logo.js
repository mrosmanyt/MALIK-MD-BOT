/**
 * Text logo / effect commands inspired by Jawad-MD logo.js (source obfuscated).
 * Uses public text→image APIs; fails gracefully when an upstream is down.
 */
import axios from 'axios';
import { cmd } from '../command.js';

async function trySendImage(sock, m, url, caption) {
  await sock.sendMessage(m.chat, { image: { url }, caption }, { quoted: m });
}

async function popcat(endpoint, text) {
  const url = `https://api.popcat.xyz/${endpoint}?text=${encodeURIComponent(text)}`;
  // popcat returns image bytes directly for some endpoints — verify with HEAD/GET
  const res = await axios.get(url, { responseType: 'arraybuffer', timeout: 25000 });
  return Buffer.from(res.data);
}

const styles = [
  { pattern: 'neon|glow', endpoint: 'alert', label: 'Neon/Alert style' },
  { pattern: 'oogway', endpoint: 'oogway', label: 'Oogway wisdom' },
  { pattern: 'sadcat', endpoint: 'sadcat', label: 'Sad cat text' },
  { pattern: 'biden', endpoint: 'biden', label: 'Biden tweet style' },
  { pattern: 'pikachu', endpoint: 'pikachu', label: 'Pikachu meme text' },
];

for (const s of styles) {
  cmd(
    {
      pattern: s.pattern,
      desc: `${s.label} text image`,
      category: 'logo',
      filename: 'jawad-logo.js',
    },
    async (sock, m, { text }) => {
      if (!text) return m.reply(`Usage: .${s.pattern.split('|')[0]} your text`);
      try {
        await m.react('🎨');
        const buf = await popcat(s.endpoint, text.slice(0, 200));
        await sock.sendMessage(
          m.chat,
          { image: buf, caption: `🎨 ${s.label}` },
          { quoted: m }
        );
      } catch (e) {
        await m.reply(`Logo API failed: ${e.message}`);
      }
    }
  );
}

cmd(
  { pattern: 'logo|logomaker|texteffect', desc: 'Simple logo helper (lists styles)', category: 'logo', filename: 'jawad-logo.js' },
  async (sock, m, { text, prefix }) => {
    if (!text) {
      return m.reply(
        `🎨 *Logo styles*\n` +
          `• ${prefix}neon text\n• ${prefix}oogway text\n• ${prefix}sadcat text\n` +
          `• ${prefix}biden text\n• ${prefix}pikachu text\n• ${prefix}wanted (reply image)\n` +
          `• ${prefix}jail (reply image)\n• ${prefix}drip (reply image)`
      );
    }
    try {
      const buf = await popcat('alert', text.slice(0, 200));
      await sock.sendMessage(m.chat, { image: buf, caption: '🎨 Logo' }, { quoted: m });
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

async function popcatImage(endpoint, imageUrl) {
  const url = `https://api.popcat.xyz/${endpoint}?image=${encodeURIComponent(imageUrl)}`;
  const res = await axios.get(url, { responseType: 'arraybuffer', timeout: 30000 });
  return Buffer.from(res.data);
}

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

for (const [pat, ep, label] of [
  ['wanted', 'wanted', 'Wanted poster'],
  ['jail', 'jail', 'Jail bars'],
  ['drip', 'drip', 'Drip meme'],
]) {
  cmd(
    { pattern: pat, desc: `${label} from replied image`, category: 'logo', filename: 'jawad-logo.js' },
    async (sock, m) => {
      try {
        let buffer;
        if (m.quoted?.type === 'imageMessage') buffer = await m.quoted.download();
        else if (m.type === 'imageMessage') buffer = await m.download();
        else return m.reply('Reply to an image.');
        await m.react('🖼️');
        const link = await uploadTemp(buffer);
        const out = await popcatImage(ep, link);
        await sock.sendMessage(m.chat, { image: out, caption: `🎨 ${label}` }, { quoted: m });
      } catch (e) {
        await m.reply(`Failed: ${e.message}`);
      }
    }
  );
}
