# MALIK-MD-BOT

Self-hosted multi-device WhatsApp bot built on **[@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys)** with a clean ESM plugin system.

- **No** remote zip / obfuscated loaders  
- **No** jawadtechyt runtime dependency  
- **No** mass-report or botnet-style features  

## Features

- Plugin commands across fun, games, downloaders, AI, group admin, stickers/media, tools, and search  
- Express health endpoint (`/` and `/health`)  
- Optional MongoDB via `MONGODB_URL` for group flags (antilink, etc.)  
- QR pairing with multi-file auth in `./session`  
- Dockerfile + Heroku `app.json`

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
| `PORT` | `3000` | HTTP health port |
| `MONGODB_URL` | _(empty)_ | Optional Mongo connection string |
| `OPENAI_API_KEY` | _(empty)_ | Chat + DALL·E |
| `GROQ_API_KEY` | _(empty)_ | Fast chat models |
| `OPENAI_MODEL` | `gpt-4o-mini` | |
| `GROQ_MODEL` | `llama-3.3-70b-versatile` | |
| `PACK_NAME` / `PACK_AUTHOR` | MALIK-MD / MALIK | Sticker meta |
| `ANTILINK` | `false` | Default group antilink |
| `TIME_ZONE` | `Asia/Karachi` | |
| `SESSION_DIR` | `./session` | Auth folder |

Copy `.env.example` to `.env` and edit.

## Run locally

```bash
git clone https://github.com/mrosmanyt/MALIK-MD-BOT.git
cd MALIK-MD-BOT
cp .env.example .env
npm install
npm start
```

Scan the QR printed in the terminal (WhatsApp → Linked Devices). Session files are saved under `session/`.

## Deploy on Heroku

1. Create a new Heroku app and connect this GitHub repo (or use the Deploy button / `heroku create`).  
2. Set config vars from the table above (`OWNER_NUMBER`, optional AI / Mongo keys).  
3. Enable the **ffmpeg** buildpack (listed in `app.json`) or deploy via `heroku.yml` + Docker.  
4. Scale the `web` dyno. Open the app URL for health JSON.  
5. Watch logs (`heroku logs --tail`) and scan the QR once.

```bash
heroku create your-app-name
heroku buildpacks:add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
heroku buildpacks:add heroku/nodejs
heroku config:set OWNER_NUMBER=923xxxxxxxxx MODE=public
git push heroku main
heroku logs --tail
```

## Docker

```bash
docker build -t malik-md-bot .
docker run -p 3000:3000 --env-file .env -v "$(pwd)/session:/app/session" malik-md-bot
```

## Commands

Send `.menu` or `.help` in WhatsApp for the full categorized list.

Examples: `.ping` `.yts lo-fi` `.ai hello` `.sticker` (reply image) `.tagall` `.weather Lahore`

## Project layout

```
index.js          # entry + Baileys + express
config.js         # env-only config
command.js        # cmd() registry
lib/              # helpers, msg serialize, mongo
plugins/          # feature plugins by category
session/          # auth (gitignored)
```

## License

MIT
