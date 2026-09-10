# MALIK-MD-BOT

Self-hosted multi-device WhatsApp bot built on **[@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys)** with a clean ESM plugin system and a modular **website admin panel**.

- **No** remote zip / obfuscated loaders  
- **No** jawadtechyt runtime dependency  
- **No** mass-report or botnet-style features  

## Features

- **1800+** plugin commands across fun, games, downloaders, AI, anime, logo, group admin, stickers/media, tools, search, and bulk utility packs  
- Express health endpoint (`/` and `/health`) plus **Admin UI** at `/admin`  
- Optional MongoDB via `MONGODB_URL` for group flags and admin user records  
- QR pairing with multi-file auth in `./session`  
- Dockerfile + Heroku `app.json`


## Command sources

Command ideas and working APIs were adapted (cleaned / reimplemented for this bot’s `cmd()` API) from:

- [JawadTechXD/JAWAD-MD](https://github.com/JawadTechXD/JAWAD-MD) — plugins such as ai, anime, downloader, fun, general, group, logo, owner, search, system, tools (upstream plugins are obfuscated; handlers here are clean reimplementations)
- [men814586-ship-it/malikmdprivate2](https://github.com/men814586-ship-it/malikmdprivate2) — selected `plugins/*.js` ports

**Not ported:** mass-report, remote multi-session botnet controls, hardcoded Mongo/API secrets, and spammy `unban0–99` / duplicate AI-alias floods.

Send `.menu` in WhatsApp for the live categorized list (includes bulk packs).

## Requirements

- Node.js **20+**
- Optional: **ffmpeg** (stickers conversion, audio filters)
- Optional: MongoDB, Groq or OpenAI API keys

## Environment variables

| Variable | Default | Notes |
|----------|---------|--------|
| `PREFIX` | `.` | Command prefix |
| `BOT_NAME` | `MALIK-MD` | Display name |
| `OWNER_NAME` | `MALIK` | Owner name |
| `OWNER_NUMBER` | _(empty)_ | Country code + number, no `+` |
| `SUDO` | _(empty)_ | Extra owner numbers, comma-separated |
| `MODE` | `public` | `public` / `private` / `inbox` / `groups` |
| `PORT` | `3000` | HTTP health + admin port |
| `MONGODB_URL` | _(empty)_ | Optional Mongo connection string |
| `OPENAI_API_KEY` | _(empty)_ | Chat + DALL·E |
| `GROQ_API_KEY` | _(empty)_ | Fast chat models |
| `OPENAI_MODEL` | `gpt-4o-mini` | |
| `GROQ_MODEL` | `llama-3.3-70b-versatile` | |
| `PACK_NAME` / `PACK_AUTHOR` | MALIK-MD / MALIK | Sticker meta |
| `ANTILINK` | `false` | Default group antilink |
| `TIME_ZONE` | `Asia/Karachi` | |
| `SESSION_DIR` | `./session` | Auth folder |
| `ADMIN_EMAIL` | _(empty)_ | Admin panel login email (**required** for `/admin`) |
| `ADMIN_PASSWORD` | _(empty)_ | Admin panel login password (**required** for `/admin`) |
| `ADMIN_TOKEN` | _(empty)_ | Optional Bearer API token / cookie signing secret |
| `RUN_BOT` | _(see notes)_ | Set `true` to force Baileys worker. On **Vercel**, bot is skipped unless `RUN_BOT=true`. On **Heroku/local**, bot starts by default (`VERCEL` unset). |

Copy `.env.example` to `.env` and edit. **Never commit real credentials.**

## Run locally

```bash
git clone https://github.com/mrosmanyt/MALIK-MD-BOT.git
cd MALIK-MD-BOT
cp .env.example .env
npm install
npm start
```

Scan the QR printed in the terminal (WhatsApp → Linked Devices). Session files are saved under `session/`.

## Website admin panel

### Open the admin

1. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env` (optional `ADMIN_TOKEN`).
2. Start the bot (`npm start`).
3. Open `http://localhost:3000/admin` (or your host/`PORT`).
4. Sign in with the same email/password from the environment.

Credentials are read from the environment only — they are **never** hardcoded in HTML or source.

### What the dashboard shows

| Page | Data |
|------|------|
| **Overview** | Uptime, command count, Mongo status, tracked user count, mode/prefix |
| **Users** | Lightweight records upserted on inbound messages: `jid`, `pushName`, `lastSeen`, `messageCount` (Mongo if configured, else `data/users.json`) |
| **Commands** | Catalog from the plugin command registry (pattern, category, description, owner-only) |
| **Settings** | Non-secret config view; API keys and passwords are **redacted** |

### JSON API (`/api/admin/*`)

| Method | Path | Auth | Purpose |
|--------|------|------|---------|
| `POST` | `/api/admin/login` | — | Cookie + token session |
| `POST` | `/api/admin/logout` | — | Clear session cookie |
| `GET` | `/api/admin/me` | session/token | Current admin |
| `GET` | `/api/admin/overview` | ✓ | Stats |
| `GET` | `/api/admin/users?limit=&skip=&search=` | ✓ | User list |
| `GET` | `/api/admin/commands` | ✓ | Command catalog |
| `GET` | `/api/admin/settings` | ✓ | Redacted settings |

Auth: HttpOnly signed cookie after login, or `Authorization: Bearer <ADMIN_TOKEN>` / session token.

### How to add a new admin page (extension steps)

The admin stack is modular under `lib/admin/` and `public/admin/` so AI tools or humans can extend it safely.

1. **Add an API route** (protected automatically) using the helper:

```js
// e.g. in a plugin or lib/my-feature.js after mount, or before start:
import { registerAdminRoute } from '../lib/admin/index.js';

registerAdminRoute('get', '/extras', (req, res) => {
  res.json({ hello: 'world', admin: req.admin?.email });
});
// Available at GET /api/admin/extras
```

2. **Add UI** under `public/admin/`:
   - Create `public/admin/js/extras.js` (or extend `app.js`) to `fetch('/api/admin/extras', { credentials: 'include' })`.
   - Add a nav button + `<section class="page" id="page-extras">` in `public/admin/index.html`.
   - Wire the nav in `public/admin/js/app.js` (`setPage('extras')` + loader).

3. **Keep secrets out of the client** — any new settings view must redact tokens/keys the same way `publicSettings()` does in `lib/admin/routes.js`.

4. **Do not** add remote WhatsApp control, mass-report, or hardcoded passwords.

### Admin module layout

```
lib/admin/
  auth.js      # env credentials, signed cookie / Bearer token
  users.js     # Mongo or data/users.json upsert + list
  routes.js    # /api/admin/* + registerAdminRoute + mountAdmin
  index.js     # public exports
public/admin/
  login.html / index.html / css/ / js/
```

## Deploy platforms

| Platform | Role | Notes |
|----------|------|--------|
| **Vercel** | Admin panel + health/API | Serverless Express via `api/index.js`. Baileys **does not** start (no long-lived WA socket on serverless). |
| **Heroku** | WhatsApp bot worker + admin | Long-lived Node process: Baileys + Express. Set `ADMIN_*` and `OWNER_NUMBER`. |

## Deploy on Vercel (admin panel) — self-deploy checklist

Use Vercel for the **website admin** and health JSON only. Pairing / WhatsApp traffic stays on Heroku (or another always-on host).

1. Fork or clone [mrosmanyt/MALIK-MD-BOT](https://github.com/mrosmanyt/MALIK-MD-BOT).
2. Open [vercel.com/new](https://vercel.com/new) → **Import** this GitHub repo (Framework Preset: **Other** / no build command).
3. Set environment variables (Project → Settings → Environment Variables):
   - **Required for `/admin`:** `ADMIN_EMAIL` (e.g. `mrosmanyt@gmail.com`), `ADMIN_PASSWORD` (set in Vercel UI only — never commit)
   - **Owner / WhatsApp:** `OWNER_NUMBER` (e.g. `923489057646`)
   - **Optional:** `ADMIN_TOKEN`, `MONGODB_URL`, `BOT_NAME`, `OWNER_NAME`, `PREFIX`, `MODE`
4. Deploy (or **Redeploy** latest `main`). Confirm:
   - `https://YOUR-APP.vercel.app/` → JSON health (`bot`, `commands`, `admin`) — `commands` should be **1800+** (loads without `RUN_BOT`)
   - `https://YOUR-APP.vercel.app/admin` → login with the env credentials
5. Keep `RUN_BOT` **unset** on Vercel (Baileys needs a long-lived process; use Heroku/VPS/Docker for WhatsApp). npm deprecation warnings during install are not fatal.
6. `vercel.json` rewrites all routes to `api/index.js` and bundles `public/**`, `plugins/**`, `lib/**`. Do not delete `api/index.js`, `vercel.json`, or `public/admin/`.

> **Redeploy latest `main`** after pulling this fix so Vercel is not stuck on an old commit (`commands: 0`). Command count loads on the admin/API path without enabling Baileys/`RUN_BOT`. npm deprecation warnings are not fatal.

```bash
# Optional CLI from your machine
npm i -g vercel
vercel login
vercel   # link + deploy
vercel env pull   # optional
```

## Deploy on Heroku

1. Create a new Heroku app and connect this GitHub repo (or use the Deploy button / `heroku create`).  
2. Set config vars from the table above (`OWNER_NUMBER`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, optional AI / Mongo keys).  
3. Enable the **ffmpeg** buildpack (listed in `app.json`) or deploy via `heroku.yml` + Docker.  
4. Scale the `web` dyno (Baileys starts automatically when `VERCEL` is unset). Open the app URL for health JSON; open `/admin` for the panel.  
5. Watch logs (`heroku logs --tail`) and scan the QR once.  
6. Optional: set `RUN_BOT=true` explicitly for clarity (default on Heroku is already to run the bot).

```bash
heroku create your-app-name
heroku buildpacks:add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
heroku buildpacks:add heroku/nodejs
heroku config:set OWNER_NUMBER=923xxxxxxxxx MODE=public ADMIN_EMAIL=you@example.com ADMIN_PASSWORD='strong-secret'
git push heroku main
heroku logs --tail
```

## Docker

```bash
docker build -t malik-md-bot .
docker run -p 3000:3000 --env-file .env -v "$(pwd)/session:/app/session" -v "$(pwd)/data:/app/data" malik-md-bot
```

## Commands

Send `.menu` or `.help` in WhatsApp for the full categorized list (**1800+** registered commands including bulk packs).

Examples: `.ping` `.yts lo-fi` `.ai hello` `.sticker` (reply image) `.tagall` `.weather Lahore`

## Project layout

```
index.js          # Express app + conditional Baileys; default export for Vercel
api/index.js      # Vercel serverless entry (exports Express app)
vercel.json       # rewrites + include public/**, plugins/**, lib/** for serverless
config.js         # env-only config
command.js        # cmd() registry
lib/              # helpers, msg serialize, mongo, admin/
plugins/          # feature plugins by category
public/admin/     # admin static UI
data/             # JSON fallback for admin users (gitignored)
session/          # auth (gitignored)
```

## License

MIT
