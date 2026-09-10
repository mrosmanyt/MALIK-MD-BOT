import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { Sticker, StickerTypes } from 'wa-sticker-formatter';
import { cmd } from '../command.js';
import config from '../config.js';
import { tempPath } from '../lib/functions.js';

const execAsync = promisify(exec);

async function makeSticker(buffer, { pack, author, type } = {}) {
  const sticker = new Sticker(buffer, {
    pack: pack || config.PACK_NAME,
    author: author || config.PACK_AUTHOR,
    type: type || StickerTypes.FULL,
    quality: 70,
  });
  return sticker.toBuffer();
}

cmd(
  { pattern: 'sticker|s|stick', desc: 'Image/video/gif → sticker', category: 'sticker', filename: 'sticker.js' },
  async (sock, m) => {
    try {
      let buffer;
      if (m.quoted && (m.quoted.type === 'imageMessage' || m.quoted.type === 'videoMessage')) {
        buffer = await m.quoted.download();
      } else if (m.type === 'imageMessage' || m.type === 'videoMessage') {
        buffer = await m.download();
      } else {
        return m.reply('Reply to an image/video/gif with .sticker');
      }
      const webp = await makeSticker(buffer);
      await sock.sendMessage(m.chat, { sticker: webp }, { quoted: m });
    } catch (e) {
      await m.reply(`Sticker failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'take|steal', desc: 'Re-pack sticker with new author', category: 'sticker', filename: 'sticker.js' },
  async (sock, m, { text }) => {
    try {
      if (!m.quoted || m.quoted.type !== 'stickerMessage') {
        return m.reply('Reply to a sticker: .take pack|author');
      }
      const buffer = await m.quoted.download();
      const [pack, author] = (text || '').split('|').map((x) => x.trim());
      const webp = await makeSticker(buffer, {
        pack: pack || config.PACK_NAME,
        author: author || config.PACK_AUTHOR,
      });
      await sock.sendMessage(m.chat, { sticker: webp }, { quoted: m });
    } catch (e) {
      await m.reply(`Take failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'toimg|tomedia', desc: 'Sticker → image (ffmpeg/sharp via jimp)', category: 'sticker', filename: 'sticker.js' },
  async (sock, m) => {
    try {
      if (!m.quoted || m.quoted.type !== 'stickerMessage') {
        return m.reply('Reply to a sticker with .toimg');
      }
      const buffer = await m.quoted.download();
      const inFile = tempPath(`st_${Date.now()}.webp`);
      const outFile = tempPath(`st_${Date.now()}.png`);
      fs.writeFileSync(inFile, buffer);
      try {
        await execAsync(`ffmpeg -y -i "${inFile}" "${outFile}"`);
        const img = fs.readFileSync(outFile);
        await sock.sendMessage(m.chat, { image: img, caption: '✅ Converted' }, { quoted: m });
      } catch {
        // fallback: send webp as document
        await sock.sendMessage(
          m.chat,
          { document: buffer, mimetype: 'image/webp', fileName: 'sticker.webp' },
          { quoted: m }
        );
      } finally {
        try { fs.unlinkSync(inFile); } catch {}
        try { fs.unlinkSync(outFile); } catch {}
      }
    } catch (e) {
      await m.reply(`toimg failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'circle|round', desc: 'Image → circle sticker', category: 'sticker', filename: 'sticker.js' },
  async (sock, m) => {
    try {
      let buffer;
      if (m.quoted?.type === 'imageMessage') buffer = await m.quoted.download();
      else if (m.type === 'imageMessage') buffer = await m.download();
      else return m.reply('Reply to an image.');
      const webp = await makeSticker(buffer, { type: StickerTypes.CIRCLE });
      await sock.sendMessage(m.chat, { sticker: webp }, { quoted: m });
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'crop', desc: 'Image → cropped sticker', category: 'sticker', filename: 'sticker.js' },
  async (sock, m) => {
    try {
      let buffer;
      if (m.quoted?.type === 'imageMessage') buffer = await m.quoted.download();
      else if (m.type === 'imageMessage') buffer = await m.download();
      else return m.reply('Reply to an image.');
      const webp = await makeSticker(buffer, { type: StickerTypes.CROPPED });
      await sock.sendMessage(m.chat, { sticker: webp }, { quoted: m });
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'smeme|memestick', desc: 'Text meme sticker (top|bottom)', category: 'sticker', filename: 'sticker.js' },
  async (sock, m, { text }) => {
    try {
      let buffer;
      if (m.quoted?.type === 'imageMessage') buffer = await m.quoted.download();
      else if (m.type === 'imageMessage') buffer = await m.download();
      else return m.reply('Reply to image: .smeme top|bottom');
      // Use jimp to draw simple text
      const Jimp = (await import('jimp')).default;
      const img = await Jimp.read(buffer);
      const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
      const [top, bottom] = (text || 'TOP|BOTTOM').split('|');
      if (top) img.print(font, 0, 10, { text: top.trim().toUpperCase(), alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER }, img.bitmap.width);
      if (bottom) img.print(font, 0, img.bitmap.height - 50, { text: bottom.trim().toUpperCase(), alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER }, img.bitmap.width);
      const out = await img.getBufferAsync(Jimp.MIME_PNG);
      const webp = await makeSticker(out);
      await sock.sendMessage(m.chat, { sticker: webp }, { quoted: m });
    } catch (e) {
      await m.reply(`smeme failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'attp', desc: 'Text → animated-style sticker (static text)', category: 'sticker', filename: 'sticker.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .attp hello');
    try {
      const Jimp = (await import('jimp')).default;
      const img = new Jimp(512, 512, 0x00000000);
      const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
      img.print(
        font,
        0,
        0,
        { text: text.slice(0, 40), alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE },
        512,
        512
      );
      const out = await img.getBufferAsync(Jimp.MIME_PNG);
      const webp = await makeSticker(out);
      await sock.sendMessage(m.chat, { sticker: webp }, { quoted: m });
    } catch (e) {
      await m.reply(`attp failed: ${e.message}`);
    }
  }
);
