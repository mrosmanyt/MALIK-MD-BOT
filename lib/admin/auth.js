/**
 * Admin authentication — credentials from env only (never hardcoded).
 * Uses HMAC-signed session cookies. Optional ADMIN_TOKEN can be used
 * as Bearer header or as the signing secret override.
 */
import crypto from 'crypto';
import config from '../../config.js';

const COOKIE_NAME = 'malik_admin_session';
const TOKEN_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

function signingSecret() {
  if (config.ADMIN_TOKEN) return config.ADMIN_TOKEN;
  // Derive a stable secret from email+password so restarts keep sessions
  // only when credentials are set.
  const base = `${config.ADMIN_EMAIL}:${config.ADMIN_PASSWORD}:malik-admin-v1`;
  return crypto.createHash('sha256').update(base).digest('hex');
}

export function isAdminConfigured() {
  return Boolean(config.ADMIN_EMAIL && config.ADMIN_PASSWORD);
}

export function validateCredentials(email, password) {
  if (!isAdminConfigured()) return false;
  const e = String(email || '').trim().toLowerCase();
  const p = String(password || '');
  return (
    e === String(config.ADMIN_EMAIL).trim().toLowerCase() &&
    p === String(config.ADMIN_PASSWORD)
  );
}

function b64url(buf) {
  return Buffer.from(buf)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function fromB64url(str) {
  const pad = str.length % 4 === 0 ? '' : '='.repeat(4 - (str.length % 4));
  const s = str.replace(/-/g, '+').replace(/_/g, '/') + pad;
  return Buffer.from(s, 'base64').toString('utf8');
}

export function createSessionToken(email) {
  const payload = {
    email: String(email).trim().toLowerCase(),
    exp: Date.now() + TOKEN_TTL_MS,
    iat: Date.now(),
  };
  const body = b64url(JSON.stringify(payload));
  const sig = crypto
    .createHmac('sha256', signingSecret())
    .update(body)
    .digest('base64url');
  return `${body}.${sig}`;
}

export function verifySessionToken(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [body, sig] = parts;
  const expected = crypto
    .createHmac('sha256', signingSecret())
    .update(body)
    .digest('base64url');
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  try {
    const payload = JSON.parse(fromB64url(body));
    if (!payload.exp || Date.now() > payload.exp) return null;
    if (
      payload.email !== String(config.ADMIN_EMAIL).trim().toLowerCase()
    ) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

export function parseCookies(req) {
  const header = req.headers?.cookie || '';
  const out = {};
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  }
  return out;
}

export function getTokenFromRequest(req) {
  const auth = req.headers?.authorization || '';
  if (auth.toLowerCase().startsWith('bearer ')) {
    const t = auth.slice(7).trim();
    // Allow ADMIN_TOKEN as a long-lived API token
    if (config.ADMIN_TOKEN && t === config.ADMIN_TOKEN) {
      return { type: 'api-token', email: config.ADMIN_EMAIL };
    }
    const session = verifySessionToken(t);
    if (session) return { type: 'session', ...session };
  }
  const cookies = parseCookies(req);
  const session = verifySessionToken(cookies[COOKIE_NAME]);
  if (session) return { type: 'session', ...session };
  return null;
}

export function setSessionCookie(res, token) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${encodeURIComponent(token)}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${Math.floor(TOKEN_TTL_MS / 1000)}${secure}`
  );
}

export function clearSessionCookie(res) {
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`
  );
}

/**
 * Express middleware — requires valid admin session or ADMIN_TOKEN bearer.
 */
export function requireAdmin(req, res, next) {
  if (!isAdminConfigured()) {
    return res.status(503).json({
      error: 'Admin not configured',
      hint: 'Set ADMIN_EMAIL and ADMIN_PASSWORD in environment',
    });
  }
  const auth = getTokenFromRequest(req);
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  req.admin = auth;
  next();
}

export { COOKIE_NAME };
export default {
  isAdminConfigured,
  validateCredentials,
  createSessionToken,
  verifySessionToken,
  getTokenFromRequest,
  setSessionCookie,
  clearSessionCookie,
  requireAdmin,
  parseCookies,
  COOKIE_NAME,
};
