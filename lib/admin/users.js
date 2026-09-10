/**
 * Lightweight user records for the admin panel.
 * MongoDB when connected; otherwise JSON file under data/users.json.
 */
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { isMongoReady } from '../db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

const userSchema = new mongoose.Schema(
  {
    jid: { type: String, required: true, unique: true, index: true },
    pushName: { type: String, default: 'User' },
    lastSeen: { type: Date, default: Date.now },
    messageCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const AdminUser =
  mongoose.models.AdminUser || mongoose.model('AdminUser', userSchema);

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function readJsonUsers() {
  ensureDataDir();
  if (!fs.existsSync(USERS_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8')) || {};
  } catch {
    return {};
  }
}

function writeJsonUsers(map) {
  ensureDataDir();
  fs.writeFileSync(USERS_FILE, JSON.stringify(map, null, 2), 'utf8');
}

/**
 * Upsert a user on inbound message.
 * @param {{ jid: string, pushName?: string }} info
 */
export async function upsertUser(info) {
  const jid = String(info?.jid || '').trim();
  if (!jid || jid === 'status@broadcast') return null;
  const pushName = String(info?.pushName || 'User').slice(0, 128);
  const now = new Date();

  if (isMongoReady()) {
    try {
      return await AdminUser.findOneAndUpdate(
        { jid },
        {
          $set: { pushName, lastSeen: now },
          $inc: { messageCount: 1 },
          $setOnInsert: { jid },
        },
        { upsert: true, new: true }
      );
    } catch (err) {
      console.error('[ADMIN/users] mongo upsert failed:', err.message);
      // fall through to JSON
    }
  }

  const map = readJsonUsers();
  const prev = map[jid] || {
    jid,
    pushName,
    lastSeen: now.toISOString(),
    messageCount: 0,
  };
  map[jid] = {
    jid,
    pushName: pushName || prev.pushName,
    lastSeen: now.toISOString(),
    messageCount: (prev.messageCount || 0) + 1,
  };
  writeJsonUsers(map);
  return map[jid];
}

/**
 * @param {{ limit?: number, skip?: number, search?: string }} opts
 */
export async function listUsers(opts = {}) {
  const limit = Math.min(Math.max(Number(opts.limit) || 50, 1), 500);
  const skip = Math.max(Number(opts.skip) || 0, 0);
  const search = String(opts.search || '').trim().toLowerCase();

  if (isMongoReady()) {
    try {
      const q = search
        ? {
            $or: [
              { jid: { $regex: search, $options: 'i' } },
              { pushName: { $regex: search, $options: 'i' } },
            ],
          }
        : {};
      const [users, total] = await Promise.all([
        AdminUser.find(q)
          .sort({ lastSeen: -1 })
          .skip(skip)
          .limit(limit)
          .lean(),
        AdminUser.countDocuments(q),
      ]);
      return {
        users: users.map(normalizeUser),
        total,
        limit,
        skip,
        storage: 'mongo',
      };
    } catch (err) {
      console.error('[ADMIN/users] mongo list failed:', err.message);
    }
  }

  let rows = Object.values(readJsonUsers());
  if (search) {
    rows = rows.filter(
      (u) =>
        String(u.jid).toLowerCase().includes(search) ||
        String(u.pushName || '')
          .toLowerCase()
          .includes(search)
    );
  }
  rows.sort(
    (a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime()
  );
  const total = rows.length;
  const users = rows.slice(skip, skip + limit).map(normalizeUser);
  return { users, total, limit, skip, storage: 'json' };
}

export async function countUsers() {
  if (isMongoReady()) {
    try {
      return await AdminUser.countDocuments();
    } catch {
      /* fall through */
    }
  }
  return Object.keys(readJsonUsers()).length;
}

function normalizeUser(u) {
  return {
    jid: u.jid,
    pushName: u.pushName || 'User',
    lastSeen: u.lastSeen
      ? new Date(u.lastSeen).toISOString()
      : null,
    messageCount: u.messageCount || 0,
  };
}

export function getUsersStorageMode() {
  return isMongoReady() ? 'mongo' : 'json';
}

export default {
  upsertUser,
  listUsers,
  countUsers,
  getUsersStorageMode,
  AdminUser,
};
