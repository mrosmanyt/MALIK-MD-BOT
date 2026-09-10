import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function runtime(seconds) {
  seconds = Number(seconds) || 0;
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const parts = [];
  if (d) parts.push(`${d}d`);
  if (h) parts.push(`${h}h`);
  if (m) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(' ');
}

export function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

export function jidToNum(jid = '') {
  return String(jid).split('@')[0].split(':')[0];
}

export function isOwner(jid) {
  const n = jidToNum(jid);
  if (!n) return false;
  if (config.OWNER_NUMBER && n === config.OWNER_NUMBER) return true;
  return config.SUDO.includes(n);
}

export function parseMention(text = '') {
  return [...text.matchAll(/@(\d{5,16})/g)].map((m) => `${m[1]}@s.whatsapp.net`);
}

export async function fetchJson(url, opts = {}) {
  const { data } = await axios.get(url, {
    timeout: 30000,
    ...opts,
  });
  return data;
}

export async function getBuffer(url, opts = {}) {
  const { data } = await axios.get(url, {
    responseType: 'arraybuffer',
    timeout: 60000,
    ...opts,
  });
  return Buffer.from(data);
}

export function tempPath(name) {
  const dir = path.join(process.cwd(), 'temp');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, name);
}

export function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function toFancy(text) {
  const map = {
    a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲',
    j: '𝓳', k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻',
    s: '𝓼', t: '𝓽', u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃',
    A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔', F: '𝓕', G: '𝓖', H: '𝓗', I: '𝓘',
    J: '𝓙', K: '𝓚', L: '𝓛', M: '𝓜', N: '𝓝', O: '𝓞', P: '𝓟', Q: '𝓠', R: '𝓡',
    S: '𝓢', T: '𝓣', U: '𝓤', V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨', Z: '𝓩',
  };
  return String(text)
    .split('')
    .map((c) => map[c] || c)
    .join('');
}

export function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, '0')).join(':');
}

export { __dirname };
