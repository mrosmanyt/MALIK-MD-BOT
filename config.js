import 'dotenv/config';

const bool = (v, def = false) => {
  if (v === undefined || v === null || v === '') return def;
  return String(v).toLowerCase() === 'true' || v === '1';
};

const config = {
  PREFIX: process.env.PREFIX || '.',
  BOT_NAME: process.env.BOT_NAME || 'MALIK-MD',
  OWNER_NAME: process.env.OWNER_NAME || 'MALIK',
  OWNER_NUMBER: (process.env.OWNER_NUMBER || '').replace(/\D/g, ''),
  SUDO: (process.env.SUDO || process.env.SUDO_NUMBERS || '')
    .split(',')
    .map((n) => n.replace(/\D/g, ''))
    .filter(Boolean),
  MODE: (process.env.MODE || 'public').toLowerCase(),
  PORT: Number(process.env.PORT || 3000),
  MONGODB_URL: process.env.MONGODB_URL || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  GROQ_API_KEY: process.env.GROQ_API_KEY || '',
  OPENAI_MODEL: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  GROQ_MODEL: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
  PACK_NAME: process.env.PACK_NAME || 'MALIK-MD',
  PACK_AUTHOR: process.env.PACK_AUTHOR || 'MALIK',
  ANTILINK: bool(process.env.ANTILINK, false),
  WELCOME: bool(process.env.WELCOME, false),
  TIME_ZONE: process.env.TIME_ZONE || 'Asia/Karachi',
  SESSION_DIR: process.env.SESSION_DIR || './session',
  VERSION: '1.0.0',
  // Admin panel — NEVER hardcode these; set via environment only
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || '',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || '',
  ADMIN_TOKEN: process.env.ADMIN_TOKEN || '',
};

export default config;
