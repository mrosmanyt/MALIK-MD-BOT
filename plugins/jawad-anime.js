/**
 * Anime / random image commands adapted from Jawad-MD + malikmdprivate2 (utility).
 * Jawad plugin sources are obfuscated — reimplemented cleanly against public APIs.
 */
import axios from 'axios';
import { cmd } from '../command.js';
import { pick } from '../lib/functions.js';

async function sendPic(sock, m, url, caption) {
  await sock.sendMessage(m.chat, { image: { url }, caption }, { quoted: m });
}

async function waifuPics(category) {
  const { data } = await axios.get(`https://api.waifu.pics/sfw/${category}`, { timeout: 20000 });
  return data?.url;
}

cmd(
  { pattern: 'waifu|imgwaifu', desc: 'Random waifu image', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      await m.react('🌸');
      const url = await waifuPics('waifu');
      if (!url) return m.reply('No image.');
      await sendPic(sock, m, url, '🌸 Waifu');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'neko|imgneko', desc: 'Random neko image', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      await m.react('🐱');
      const url = await waifuPics('neko');
      if (!url) return m.reply('No image.');
      await sendPic(sock, m, url, '🐱 Neko');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'megumin', desc: 'Random Megumin image', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      const url = await waifuPics('megumin');
      if (!url) return m.reply('No image.');
      await sendPic(sock, m, url, '💥 Megumin');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'awoo|imgawoo', desc: 'Random awoo image', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      const url = await waifuPics('awoo');
      if (!url) return m.reply('No image.');
      await sendPic(sock, m, url, '🐺 Awoo');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'maid|imgmaid', desc: 'Random maid image', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      const { data } = await axios.get('https://api.waifu.im/search/?included_tags=maid', { timeout: 20000 });
      const url = data?.images?.[0]?.url;
      if (!url) return m.reply('No image.');
      await sendPic(sock, m, url, '🧹 Maid');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'animegirl|ranime|randomanime', desc: 'Random anime girl (sfw)', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      const url = await waifuPics(pick(['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle']));
      if (!url) return m.reply('No image.');
      await sendPic(sock, m, url, '✨ Random anime');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'dog|doggo', desc: 'Random dog photo', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random', { timeout: 15000 });
      if (!data?.message) return m.reply('No doggo.');
      await sendPic(sock, m, data.message, '🐶 Woof');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'cat|meow', desc: 'Random cat photo', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', { timeout: 15000 });
      const url = data?.[0]?.url;
      if (!url) return m.reply('No cat.');
      await sendPic(sock, m, url, '🐱 Meow');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'cpp|couplepp|couplepic', desc: 'Matching couple profile pics', category: 'anime', filename: 'jawad-anime.js' },
  async (sock, m) => {
    try {
      await m.react('💑');
      const { data } = await axios.get('https://api.deline.web.id/random/ppcouple', { timeout: 20000 });
      const cowo = data?.result?.cowo;
      const cewe = data?.result?.cewe;
      if (!cowo || !cewe) return m.reply('Could not fetch couple pics.');
      await sock.sendMessage(m.chat, { image: { url: cowo }, caption: '👦 Male' }, { quoted: m });
      await sock.sendMessage(m.chat, { image: { url: cewe }, caption: '👩 Female' }, { quoted: m });
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);
