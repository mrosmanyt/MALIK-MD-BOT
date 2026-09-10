import fs from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';
import { cmd } from '../command.js';
import { tempPath, getBuffer } from '../lib/functions.js';

const execAsync = promisify(exec);

cmd(
  { pattern: 'tomp3|toaudio', desc: 'Video → mp3 (ffmpeg)', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      let buffer;
      if (m.quoted?.type === 'videoMessage') buffer = await m.quoted.download();
      else if (m.type === 'videoMessage') buffer = await m.download();
      else return m.reply('Reply to a video.');
      const inFile = tempPath(`v_${Date.now()}.mp4`);
      const outFile = tempPath(`a_${Date.now()}.mp3`);
      fs.writeFileSync(inFile, buffer);
      await execAsync(`ffmpeg -y -i "${inFile}" -vn -acodec libmp3lame "${outFile}"`);
      const audio = fs.readFileSync(outFile);
      await sock.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg' }, { quoted: m });
      try { fs.unlinkSync(inFile); fs.unlinkSync(outFile); } catch {}
    } catch (e) {
      await m.reply(`tomp3 failed (is ffmpeg installed?): ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'tovn|ptt', desc: 'Audio → voice note', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      let buffer;
      if (m.quoted && (m.quoted.type === 'audioMessage' || m.quoted.type === 'videoMessage')) {
        buffer = await m.quoted.download();
      } else return m.reply('Reply to audio/video.');
      await sock.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m });
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'bass|volume', desc: 'Audio bass boost (ffmpeg)', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      if (!m.quoted || m.quoted.type !== 'audioMessage') return m.reply('Reply to an audio.');
      const buffer = await m.quoted.download();
      const inFile = tempPath(`a_${Date.now()}.mp3`);
      const outFile = tempPath(`b_${Date.now()}.mp3`);
      fs.writeFileSync(inFile, buffer);
      await execAsync(`ffmpeg -y -i "${inFile}" -af "bass=g=10" "${outFile}"`);
      await sock.sendMessage(m.chat, { audio: fs.readFileSync(outFile), mimetype: 'audio/mpeg' }, { quoted: m });
      try { fs.unlinkSync(inFile); fs.unlinkSync(outFile); } catch {}
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'slow', desc: 'Slow audio (ffmpeg)', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      if (!m.quoted || m.quoted.type !== 'audioMessage') return m.reply('Reply to an audio.');
      const buffer = await m.quoted.download();
      const inFile = tempPath(`a_${Date.now()}.mp3`);
      const outFile = tempPath(`s_${Date.now()}.mp3`);
      fs.writeFileSync(inFile, buffer);
      await execAsync(`ffmpeg -y -i "${inFile}" -filter:a "atempo=0.8" "${outFile}"`);
      await sock.sendMessage(m.chat, { audio: fs.readFileSync(outFile), mimetype: 'audio/mpeg' }, { quoted: m });
      try { fs.unlinkSync(inFile); fs.unlinkSync(outFile); } catch {}
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'fast', desc: 'Fast audio (ffmpeg)', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      if (!m.quoted || m.quoted.type !== 'audioMessage') return m.reply('Reply to an audio.');
      const buffer = await m.quoted.download();
      const inFile = tempPath(`a_${Date.now()}.mp3`);
      const outFile = tempPath(`f_${Date.now()}.mp3`);
      fs.writeFileSync(inFile, buffer);
      await execAsync(`ffmpeg -y -i "${inFile}" -filter:a "atempo=1.35" "${outFile}"`);
      await sock.sendMessage(m.chat, { audio: fs.readFileSync(outFile), mimetype: 'audio/mpeg' }, { quoted: m });
      try { fs.unlinkSync(inFile); fs.unlinkSync(outFile); } catch {}
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'reverseaudio', desc: 'Reverse audio', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      if (!m.quoted || m.quoted.type !== 'audioMessage') return m.reply('Reply to an audio.');
      const buffer = await m.quoted.download();
      const inFile = tempPath(`a_${Date.now()}.mp3`);
      const outFile = tempPath(`r_${Date.now()}.mp3`);
      fs.writeFileSync(inFile, buffer);
      await execAsync(`ffmpeg -y -i "${inFile}" -af areverse "${outFile}"`);
      await sock.sendMessage(m.chat, { audio: fs.readFileSync(outFile), mimetype: 'audio/mpeg' }, { quoted: m });
      try { fs.unlinkSync(inFile); fs.unlinkSync(outFile); } catch {}
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'getpp|pp', desc: 'Get profile picture', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      const jid = m.quoted?.sender || m.mentionedJid?.[0] || m.sender;
      const url = await sock.profilePictureUrl(jid, 'image').catch(() => null);
      if (!url) return m.reply('No profile picture.');
      await sock.sendMessage(m.chat, { image: { url }, caption: 'PP' }, { quoted: m });
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'vv|viewonce', desc: 'Reveal view-once media you reply to', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      const q = m.quoted;
      if (!q) return m.reply('Reply to a view-once message.');
      // viewOnceMessageV2 / viewOnceMessage
      const vos =
        q.message?.viewOnceMessage?.message ||
        q.message?.viewOnceMessageV2?.message ||
        q.message?.viewOnceMessageV2Extension?.message;
      if (!vos) {
        // try download quoted media anyway
        if (q.download) {
          const buf = await q.download();
          const t = q.type || '';
          if (t.includes('image')) {
            await sock.sendMessage(m.chat, { image: buf, caption: '📷' }, { quoted: m });
          } else if (t.includes('video')) {
            await sock.sendMessage(m.chat, { video: buf, caption: '🎥' }, { quoted: m });
          } else return m.reply('Not a view-once media.');
          return;
        }
        return m.reply('Not a view-once media.');
      }
      await m.reply('View-once unwrap attempted — reply directly to the VO message.');
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'url|tourimg', desc: 'Upload replied image to litterbox', category: 'media', filename: 'media.js' },
  async (sock, m) => {
    try {
      let buffer;
      if (m.quoted?.type === 'imageMessage') buffer = await m.quoted.download();
      else if (m.type === 'imageMessage') buffer = await m.download();
      else return m.reply('Reply to an image.');
      const FormData = (await import('form-data')).default;
      const form = new FormData();
      form.append('reqtype', 'fileupload');
      form.append('time', '1h');
      form.append('fileToUpload', buffer, { filename: 'file.jpg' });
      const axios = (await import('axios')).default;
      const { data } = await axios.post('https://litterbox.catbox.moe/resources/internals/api.php', form, {
        headers: form.getHeaders(),
        timeout: 60000,
      });
      await m.reply(`🔗 ${data}`);
    } catch (e) {
      await m.reply(`Upload failed: ${e.message}`);
    }
  }
);
