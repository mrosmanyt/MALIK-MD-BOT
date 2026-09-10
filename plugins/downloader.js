import axios from 'axios';
import yts from 'yt-search';
import { cmd } from '../command.js';

cmd(
  { pattern: 'yts|ytsearch', desc: 'YouTube search', category: 'downloader', filename: 'downloader.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .yts query');
    try {
      await m.react('🔎');
      const r = await yts(text);
      const list = (r.videos || []).slice(0, 8);
      if (!list.length) return m.reply('No results.');
      const body = list
        .map(
          (v, i) =>
            `${i + 1}. *${v.title}*\n⏱ ${v.timestamp} · 👁 ${v.views}\n🔗 ${v.url}`
        )
        .join('\n\n');
      await m.reply(`*YouTube Search*\n\n${body}\n\n_Use .ytmp3 / .ytmp4 with a URL (needs external DL API if configured)._`);
    } catch (e) {
      await m.reply(`Search failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'ytmp3|play', desc: 'YouTube audio info + search play', category: 'downloader', filename: 'downloader.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .play song name OR youtube url');
    try {
      await m.react('🎵');
      let url = text;
      let title = text;
      if (!/youtube\.com|youtu\.be/i.test(text)) {
        const r = await yts(text);
        const v = r.videos?.[0];
        if (!v) return m.reply('No results.');
        url = v.url;
        title = v.title;
      }
      // Try a public no-key endpoint; fail gracefully
      try {
        const { data } = await axios.get(
          `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(url)}`,
          { timeout: 25000 }
        );
        const media = data?.data?.dl || data?.result?.url || data?.url;
        if (media) {
          await sock.sendMessage(
            m.chat,
            {
              audio: { url: media },
              mimetype: 'audio/mpeg',
              fileName: `${title}.mp3`,
            },
            { quoted: m }
          );
          return;
        }
      } catch {
        /* fallthrough */
      }
      await m.reply(
        `🎵 *${title}*\n🔗 ${url}\n\n⚠️ Direct MP3 download API unavailable right now. Search succeeded — try again later or use an external downloader.`
      );
    } catch (e) {
      await m.reply(`Error: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'ytmp4|video', desc: 'YouTube video download attempt', category: 'downloader', filename: 'downloader.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .ytmp4 <url|query>');
    try {
      await m.react('🎬');
      let url = text;
      let title = text;
      if (!/youtube\.com|youtu\.be/i.test(text)) {
        const r = await yts(text);
        const v = r.videos?.[0];
        if (!v) return m.reply('No results.');
        url = v.url;
        title = v.title;
      }
      try {
        const { data } = await axios.get(
          `https://api.siputzx.my.id/api/d/ytmp4?url=${encodeURIComponent(url)}`,
          { timeout: 25000 }
        );
        const media = data?.data?.dl || data?.result?.url || data?.url;
        if (media) {
          await sock.sendMessage(
            m.chat,
            { video: { url: media }, caption: `🎬 ${title}` },
            { quoted: m }
          );
          return;
        }
      } catch {
        /* fallthrough */
      }
      await m.reply(`🎬 *${title}*\n🔗 ${url}\n\n⚠️ Video DL API unavailable. Try later.`);
    } catch (e) {
      await m.reply(`Error: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'gitclone|gitdl', desc: 'GitHub repo zip link', category: 'downloader', filename: 'downloader.js' },
  async (sock, m, { text }) => {
    const match = (text || '').match(/github\.com\/([^/]+)\/([^/#?\s]+)/i);
    if (!match) return m.reply('Usage: .gitclone https://github.com/user/repo');
    const [, user, repo] = match;
    const clean = repo.replace(/\.git$/, '');
    const zip = `https://github.com/${user}/${clean}/archive/refs/heads/main.zip`;
    await m.reply(`📦 *${user}/${clean}*\nZIP (main): ${zip}\nAlso try /master.zip if main fails.`);
  }
);

cmd(
  { pattern: 'mediafire', desc: 'Mediafire link helper', category: 'downloader', filename: 'downloader.js' },
  async (sock, m, { text }) => {
    if (!text || !/mediafire\.com/i.test(text)) return m.reply('Usage: .mediafire <url>');
    try {
      const { data: html } = await axios.get(text, { timeout: 20000 });
      const name = html.match(/aria-label="Download file">([^<]+)/)?.[1]?.trim();
      const link = html.match(/href="(https:\/\/download\d+\.mediafire\.com\/[^"]+)"/)?.[1];
      if (!link) return m.reply('Could not parse MediaFire link.');
      await m.reply(`📁 ${name || 'file'}\n🔗 ${link}`);
    } catch (e) {
      await m.reply(`Failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'tiktok|tt', desc: 'TikTok download attempt', category: 'downloader', filename: 'downloader.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .tiktok <url>');
    try {
      const { data } = await axios.get(
        `https://api.siputzx.my.id/api/tiktok/v2?url=${encodeURIComponent(text)}`,
        { timeout: 25000 }
      );
      const video = data?.data?.download?.video?.[0] || data?.result?.video;
      if (!video) return m.reply('Could not fetch TikTok video.');
      await sock.sendMessage(m.chat, { video: { url: video }, caption: '🎵 TikTok' }, { quoted: m });
    } catch (e) {
      await m.reply(`TikTok failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'ig|instagram', desc: 'Instagram URL helper', category: 'downloader', filename: 'downloader.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .ig <instagram url>');
    try {
      const { data } = await axios.get(
        `https://api.siputzx.my.id/api/d/igdl?url=${encodeURIComponent(text)}`,
        { timeout: 25000 }
      );
      const urls = data?.data || data?.result || [];
      const first = Array.isArray(urls) ? urls[0]?.url || urls[0] : null;
      if (!first) return m.reply('No media found / API unavailable.');
      await sock.sendMessage(m.chat, { video: { url: first }, caption: '📸 IG' }, { quoted: m }).catch(async () => {
        await sock.sendMessage(m.chat, { image: { url: first }, caption: '📸 IG' }, { quoted: m });
      });
    } catch (e) {
      await m.reply(`IG failed: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'lyrics', desc: 'Song lyrics search (best-effort)', category: 'downloader', filename: 'downloader.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .lyrics artist - title');
    try {
      const { data } = await axios.get(
        `https://lyrist.vercel.app/api/${encodeURIComponent(text)}`,
        { timeout: 15000 }
      );
      if (!data?.lyrics) return m.reply('Lyrics not found.');
      await m.reply(`🎶 *${data.title || text}*\n_${data.artist || ''}_\n\n${String(data.lyrics).slice(0, 3500)}`);
    } catch (e) {
      await m.reply(`Lyrics failed: ${e.message}`);
    }
  }
);
