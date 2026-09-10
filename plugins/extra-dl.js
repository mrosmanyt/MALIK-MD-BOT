/**
 * Extra downloaders from malikmdprivate2 (download.js / dl.js) + Jawad-style aliases.
 */
import axios from 'axios';
import { cmd } from '../command.js';

cmd(
  { pattern: 'twitter|tw|xdl', desc: 'Download Twitter/X video', category: 'downloader', filename: 'extra-dl.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .twitter <x.com or twitter.com url>');
    if (!/twitter\.com|x\.com/i.test(text)) return m.reply('Need a Twitter/X URL.');
    try {
      await m.react('🐦');
      const { data } = await axios.get(
        `https://api.deline.web.id/downloader/twitter?url=${encodeURIComponent(text.trim())}`,
        { timeout: 30000 }
      );
      const d = data?.data || data?.result || {};
      const link = d.downloadLink || d.video || d.url;
      if (!link) return m.reply('No video found for that tweet.');
      await sock.sendMessage(
        m.chat,
        {
          video: { url: link },
          caption: `🐦 ${d.videoTitle || d.title || 'Twitter video'}`,
          mimetype: 'video/mp4',
        },
        { quoted: m }
      );
    } catch (e) {
      await m.reply(`Twitter DL failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'fb|facebook|fbdl', desc: 'Download Facebook video', category: 'downloader', filename: 'extra-dl.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .fb <facebook url>');
    try {
      await m.react('📘');
      const { data } = await axios.get(
        `https://api.deline.web.id/downloader/facebook?url=${encodeURIComponent(text.trim())}`,
        { timeout: 30000 }
      );
      const r = data?.result || data?.data || data;
      const link = r?.url || r?.hd || r?.sd || r?.video || r?.[0]?.url;
      if (!link) return m.reply('Could not fetch Facebook media.');
      await sock.sendMessage(
        m.chat,
        { video: { url: link }, caption: '📘 Facebook', mimetype: 'video/mp4' },
        { quoted: m }
      );
    } catch (e) {
      await m.reply(`FB DL failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'gdrive|gdl|googledrive', desc: 'Google Drive file download', category: 'downloader', filename: 'extra-dl.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .gdrive <drive share link>');
    let fileId = null;
    for (const re of [/\/file\/d\/([^/]+)/, /id=([^&]+)/, /\/d\/([^/]+)/]) {
      const match = text.match(re);
      if (match) {
        fileId = match[1];
        break;
      }
    }
    if (!fileId) return m.reply('Invalid Google Drive link.');
    try {
      await m.react('📁');
      const { data } = await axios.get(
        `https://api.deline.web.id/downloader/gdrive?url=https://drive.google.com/file/d/${fileId}/view`,
        { timeout: 30000 }
      );
      const result = data?.result || data?.data || {};
      const downloadUrl = result.downloadUrl || result.url;
      if (!downloadUrl) return m.reply('Could not resolve Drive file.');
      const fileRes = await axios.get(downloadUrl, { responseType: 'arraybuffer', timeout: 60000 });
      const buf = Buffer.from(fileRes.data);
      if (buf.length > 90 * 1024 * 1024) return m.reply('File too large for WhatsApp (>90MB).');
      await sock.sendMessage(
        m.chat,
        {
          document: buf,
          fileName: result.fileName || 'gdrive-file',
          mimetype: result.mimetype || 'application/octet-stream',
          caption: `📁 ${result.fileName || 'Drive file'}${result.fileSize ? `\n📦 ${result.fileSize}` : ''}`,
        },
        { quoted: m }
      );
    } catch (e) {
      await m.reply(`GDrive failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'apk|app', desc: 'Search Aptoide for an APK', category: 'downloader', filename: 'extra-dl.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .apk app name');
    try {
      await m.react('📦');
      const { data } = await axios.get(
        `https://ws75.aptoide.com/api/7/apps/search/query=${encodeURIComponent(text)}/limit=1`,
        { timeout: 20000 }
      );
      const app = data?.datalist?.list?.[0];
      if (!app) return m.reply('No app found.');
      const sizeMb = app.size ? (app.size / 1048576).toFixed(2) + ' MB' : '?';
      await m.reply(
        `📦 *${app.name}*\n` +
          `• Package: ${app.package}\n` +
          `• Version: ${app.file?.vername || app.vername || '?'}\n` +
          `• Size: ${sizeMb}\n` +
          `• Downloads: ${app.stats?.downloads || '?'}\n` +
          `• Store: ${app.store?.name || 'Aptoide'}\n` +
          `🔗 ${app.file?.path || app.uname ? `https://en.aptoide.com/app/com/${app.package}` : ''}`
      );
      if (app.icon) {
        await sock.sendMessage(m.chat, { image: { url: app.icon }, caption: app.name }, { quoted: m });
      }
    } catch (e) {
      await m.reply(`APK search failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'capcut', desc: 'CapCut template/video download attempt', category: 'downloader', filename: 'extra-dl.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .capcut <capcut url>');
    try {
      await m.react('🎬');
      const { data } = await axios.get(
        `https://api.deline.web.id/downloader/capcut?url=${encodeURIComponent(text.trim())}`,
        { timeout: 30000 }
      );
      const r = data?.result || data?.data || data;
      const link = r?.url || r?.video || r?.download;
      if (!link) return m.reply('Could not fetch CapCut media.');
      await sock.sendMessage(
        m.chat,
        { video: { url: link }, caption: `🎬 ${r?.title || 'CapCut'}`, mimetype: 'video/mp4' },
        { quoted: m }
      );
    } catch (e) {
      await m.reply(`CapCut failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'igdl|ig2', desc: 'Alternate Instagram downloader', category: 'downloader', filename: 'extra-dl.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .igdl <instagram url>');
    try {
      await m.react('📷');
      let link;
      try {
        const { data } = await axios.get(
          `https://api-aswin-sparky.koyeb.app/api/downloader/igdl?url=${encodeURIComponent(text.trim())}`,
          { timeout: 25000 }
        );
        link = data?.data?.[0]?.url || data?.result?.[0]?.url || data?.url;
      } catch {
        const { data } = await axios.get(
          `https://api.deline.web.id/downloader/facebook?url=${encodeURIComponent(text.trim())}`,
          { timeout: 25000 }
        );
        const r = data?.result || data?.data;
        link = r?.url || r?.hd || r?.video;
      }
      if (!link) return m.reply('IG media not found.');
      const isVideo = /\.mp4|video/i.test(link);
      if (isVideo) {
        await sock.sendMessage(m.chat, { video: { url: link }, caption: '📷 IG' }, { quoted: m });
      } else {
        await sock.sendMessage(m.chat, { image: { url: link }, caption: '📷 IG' }, { quoted: m });
      }
    } catch (e) {
      await m.reply(`IG DL failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'ttmp3|tiktokmp3', desc: 'TikTok audio download', category: 'downloader', filename: 'extra-dl.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .ttmp3 <tiktok url>');
    try {
      await m.react('🎵');
      const { data } = await axios.get(
        `https://api.deline.web.id/downloader/tiktok?url=${encodeURIComponent(text.trim())}`,
        { timeout: 30000 }
      );
      const r = data?.result || data?.data || {};
      const audio = r.music || r.audio || r.music_url;
      if (!audio) return m.reply('No audio URL from TikTok API.');
      await sock.sendMessage(
        m.chat,
        { audio: { url: audio }, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3' },
        { quoted: m }
      );
    } catch (e) {
      await m.reply(`ttmp3 failed: ${e.message}`);
    }
  }
);
