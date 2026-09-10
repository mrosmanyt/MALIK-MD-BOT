/**
 * Extra ffmpeg audio effects (from malikmdprivate2 audio-editer.js concepts).
 * Skips patterns already in media.js: bass, slow, fast, reverseaudio.
 */
import fs from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';
import { cmd } from '../command.js';
import { tempPath } from '../lib/functions.js';

const execAsync = promisify(exec);

async function getAudioBuffer(m) {
  if (m.quoted && (m.quoted.type === 'audioMessage' || m.quoted.type === 'videoMessage')) {
    return m.quoted.download();
  }
  if (m.type === 'audioMessage' || m.type === 'videoMessage') return m.download();
  return null;
}

async function applyFilter(sock, m, af, label) {
  try {
    const buffer = await getAudioBuffer(m);
    if (!buffer) return m.reply('Reply to an audio/video.');
    await m.react('🎧');
    const inFile = tempPath(`in_${Date.now()}.mp3`);
    const outFile = tempPath(`out_${Date.now()}.mp3`);
    fs.writeFileSync(inFile, buffer);
    await execAsync(`ffmpeg -y -i "${inFile}" -af "${af}" "${outFile}"`);
    await sock.sendMessage(
      m.chat,
      { audio: fs.readFileSync(outFile), mimetype: 'audio/mpeg', ptt: false },
      { quoted: m }
    );
    try {
      fs.unlinkSync(inFile);
      fs.unlinkSync(outFile);
    } catch {}
  } catch (e) {
    await m.reply(`${label} failed (ffmpeg?): ${e.message}`);
  }
}

const effects = [
  ['deep', 'asetrate=44100*0.8,aresample=44100,atempo=1.1', 'Deep voice'],
  ['robot', 'afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75', 'Robot'],
  ['nightcore', 'asetrate=44100*1.25,aresample=44100,atempo=1.05', 'Nightcore'],
  ['chipmunk|tupai', 'asetrate=44100*1.5,aresample=44100,atempo=1.1', 'Chipmunk'],
  ['earrape', 'volume=12dB,bass=g=8', 'Earrape (loud)'],
  ['smooth', 'lowpass=f=3000,volume=1.2', 'Smooth'],
  ['blown', 'acrusher=.1:1:64:0:log', 'Blown/distorted'],
  ['fat', 'atempo=0.9,asetrate=44100*0.9,aresample=44100', 'Fat/slow deep'],
  ['radio', 'highpass=f=200,lowpass=f=3000,volume=1.5', 'Radio'],
  ['baby', 'asetrate=44100*1.4,aresample=44100,atempo=1.2', 'Baby voice'],
  ['demon', 'asetrate=44100*0.6,aresample=44100,atempo=0.9', 'Demon voice'],
];

for (const [pattern, af, desc] of effects) {
  cmd(
    { pattern, desc: `${desc} audio effect`, category: 'media', filename: 'audio-fx.js' },
    async (sock, m) => applyFilter(sock, m, af, desc)
  );
}
