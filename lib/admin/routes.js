/**
 * Admin HTTP API + static UI mount.
 *
 * Extension helper: registerAdminRoute(method, path, handler)
 * Example (from a plugin or custom module):
 *   import { registerAdminRoute } from '../lib/admin/index.js';
 *   registerAdminRoute('get', '/api/admin/hello', (req, res) => {
 *     res.json({ ok: true });
 *   });
 */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../../config.js';
import { commands, commandsByCategory } from '../../command.js';
import { isMongoReady } from '../db.js';
import { runtime } from '../functions.js';
import {
  isAdminConfigured,
  validateCredentials,
  createSessionToken,
  setSessionCookie,
  clearSessionCookie,
  requireAdmin,
  getTokenFromRequest,
} from './auth.js';
import { listUsers, countUsers, getUsersStorageMode } from './users.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_ADMIN = path.join(__dirname, '..', '..', 'public', 'admin');

/** @type {import('express').Router|null} */
let apiRouter = null;
const pendingExtensions = [];

/**
 * Register an extra admin API route (auth-protected).
 * Path should start with /api/admin/… (or a relative segment under /api/admin).
 * Can be called before or after mountAdmin().
 *
 * @param {'get'|'post'|'put'|'patch'|'delete'} method
 * @param {string} routePath e.g. '/extras' or '/api/admin/extras'
 * @param {...import('express').RequestHandler} handlers
 */
export function registerAdminRoute(method, routePath, ...handlers) {
  const m = String(method || 'get').toLowerCase();
  let p = String(routePath || '');
  if (p.startsWith('/api/admin')) p = p.slice('/api/admin'.length) || '/';
  if (!p.startsWith('/')) p = `/${p}`;

  if (apiRouter && typeof apiRouter[m] === 'function') {
    apiRouter[m](p, requireAdmin, ...handlers);
    return true;
  }
  pendingExtensions.push({ method: m, path: p, handlers });
  return true;
}

function publicSettings() {
  const redact = (v) => {
    if (!v) return { set: false, preview: null };
    const s = String(v);
    if (s.length <= 4) return { set: true, preview: '****' };
    return { set: true, preview: `${s.slice(0, 2)}…${s.slice(-2)}` };
  };
  return {
    PREFIX: config.PREFIX,
    BOT_NAME: config.BOT_NAME,
    OWNER_NAME: config.OWNER_NAME,
    OWNER_NUMBER: config.OWNER_NUMBER
      ? `${String(config.OWNER_NUMBER).slice(0, 3)}…`
      : '',
    SUDO_COUNT: (config.SUDO || []).length,
    MODE: config.MODE,
    PORT: config.PORT,
    TIME_ZONE: config.TIME_ZONE,
    VERSION: config.VERSION,
    ANTILINK: config.ANTILINK,
    WELCOME: config.WELCOME,
    PACK_NAME: config.PACK_NAME,
    PACK_AUTHOR: config.PACK_AUTHOR,
    SESSION_DIR: config.SESSION_DIR,
    OPENAI_MODEL: config.OPENAI_MODEL,
    GROQ_MODEL: config.GROQ_MODEL,
    // secrets — redacted only
    MONGODB_URL: redact(config.MONGODB_URL),
    OPENAI_API_KEY: redact(config.OPENAI_API_KEY),
    GROQ_API_KEY: redact(config.GROQ_API_KEY),
    ADMIN_EMAIL: config.ADMIN_EMAIL
      ? String(config.ADMIN_EMAIL).replace(/(.{2}).+(@.+)/, '$1…$2')
      : '',
    ADMIN_PASSWORD: redact(config.ADMIN_PASSWORD),
    ADMIN_TOKEN: redact(config.ADMIN_TOKEN),
  };
}

/**
 * Mount /admin UI and /api/admin JSON API on the Express app.
 * @param {import('express').Application} app
 * @param {{ startTime?: number }} [opts]
 */
export function mountAdmin(app, opts = {}) {
  const startTime = opts.startTime || global.botStart || Date.now();

  app.use(express.json({ limit: '256kb' }));
  app.use('/admin', express.static(PUBLIC_ADMIN, { index: false }));

  // Login page (public)
  app.get('/admin/login', (_req, res) => {
    res.sendFile(path.join(PUBLIC_ADMIN, 'login.html'));
  });

  // Dashboard — gate HTML with soft redirect if no cookie
  app.get(['/admin', '/admin/'], (req, res) => {
    if (!isAdminConfigured()) {
      return res
        .status(503)
        .type('html')
        .send(
          `<!doctype html><meta charset="utf-8"><title>Admin</title>
          <body style="font-family:system-ui;background:#0f1419;color:#e7ecf3;padding:2rem">
          <h1>Admin not configured</h1>
          <p>Set <code>ADMIN_EMAIL</code> and <code>ADMIN_PASSWORD</code> in the environment, then restart.</p>
          </body>`
        );
    }
    if (!getTokenFromRequest(req)) {
      return res.redirect('/admin/login');
    }
    res.sendFile(path.join(PUBLIC_ADMIN, 'index.html'));
  });

  const api = express.Router();
  apiRouter = api;

  // --- public auth endpoints ---
  api.get('/status', (_req, res) => {
    res.json({
      configured: isAdminConfigured(),
      authenticated: false,
    });
  });

  api.get('/me', (req, res) => {
    const auth = getTokenFromRequest(req);
    if (!auth) return res.status(401).json({ error: 'Unauthorized' });
    res.json({
      email: auth.email || config.ADMIN_EMAIL,
      type: auth.type,
    });
  });

  api.post('/login', (req, res) => {
    if (!isAdminConfigured()) {
      return res.status(503).json({ error: 'Admin not configured' });
    }
    const { email, password } = req.body || {};
    if (!validateCredentials(email, password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = createSessionToken(email);
    setSessionCookie(res, token);
    res.json({ ok: true, token });
  });

  api.post('/logout', (_req, res) => {
    clearSessionCookie(res);
    res.json({ ok: true });
  });

  // --- protected ---
  api.get('/overview', requireAdmin, async (_req, res) => {
    const uptimeSec = (Date.now() - startTime) / 1000;
    const cats = commandsByCategory();
    res.json({
      bot: config.BOT_NAME,
      version: config.VERSION,
      uptime: runtime(uptimeSec),
      uptimeSeconds: Math.floor(uptimeSec),
      commandCount: commands.length,
      categories: Object.keys(cats).length,
      mongo: isMongoReady(),
      usersStorage: getUsersStorageMode(),
      userCount: await countUsers(),
      mode: config.MODE,
      prefix: config.PREFIX,
      timeZone: config.TIME_ZONE,
      startedAt: new Date(startTime).toISOString(),
    });
  });

  api.get('/users', requireAdmin, async (req, res) => {
    const limit = req.query.limit;
    const skip = req.query.skip;
    const search = req.query.search;
    const data = await listUsers({ limit, skip, search });
    res.json(data);
  });

  api.get('/commands', requireAdmin, (_req, res) => {
    const list = commands
      .filter((c) => !c.dontAddCommandList)
      .map((c) => ({
        pattern: c.pattern,
        alias: c.alias || [],
        desc: c.desc || '',
        category: c.category || 'misc',
        fromMe: !!c.fromMe,
        filename: c.filename || '',
      }));
    res.json({
      total: list.length,
      byCategory: commandsByCategory(),
      commands: list,
    });
  });

  api.get('/settings', requireAdmin, (_req, res) => {
    res.json(publicSettings());
  });

  // Apply any routes registered before mount
  for (const ext of pendingExtensions) {
    if (typeof api[ext.method] === 'function') {
      api[ext.method](ext.path, requireAdmin, ...ext.handlers);
    }
  }
  pendingExtensions.length = 0;

  app.use('/api/admin', api);
  console.log('[ADMIN] panel at /admin  API at /api/admin/*');
}

export default { mountAdmin, registerAdminRoute };
