import mongoose from 'mongoose';
import config from '../config.js';

let connected = false;

export async function connectMongo() {
  if (!config.MONGODB_URL) {
    console.log('[DB] MONGODB_URL not set — running without MongoDB');
    return false;
  }
  if (connected) return true;
  try {
    await mongoose.connect(config.MONGODB_URL, {
      serverSelectionTimeoutMS: 8000,
    });
    connected = true;
    console.log('[DB] MongoDB connected');
    return true;
  } catch (err) {
    console.error('[DB] MongoDB connection failed:', err.message);
    return false;
  }
}

const groupSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    antilink: { type: Boolean, default: false },
    welcome: { type: Boolean, default: false },
    mute: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Group =
  mongoose.models.Group || mongoose.model('Group', groupSchema);

export async function getGroup(id) {
  if (!connected) return null;
  let g = await Group.findOne({ id });
  if (!g) g = await Group.create({ id });
  return g;
}

export async function setGroupFlag(id, flag, value) {
  if (!connected) return null;
  return Group.findOneAndUpdate({ id }, { [flag]: value }, { upsert: true, new: true });
}

export function isMongoReady() {
  return connected;
}

export default { connectMongo, getGroup, setGroupFlag, isMongoReady, Group };
