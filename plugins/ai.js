import axios from 'axios';
import config from '../config.js';
import { cmd } from '../command.js';

async function chatCompletion(messages) {
  if (config.GROQ_API_KEY) {
    const { data } = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      { model: config.GROQ_MODEL, messages, temperature: 0.7 },
      {
        headers: {
          Authorization: `Bearer ${config.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        timeout: 60000,
      }
    );
    return data.choices?.[0]?.message?.content?.trim();
  }
  if (config.OPENAI_API_KEY) {
    const { data } = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      { model: config.OPENAI_MODEL, messages, temperature: 0.7 },
      {
        headers: {
          Authorization: `Bearer ${config.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        timeout: 60000,
      }
    );
    return data.choices?.[0]?.message?.content?.trim();
  }
  return null;
}

function missingKeyMsg() {
  return (
    '⚠️ AI is not configured.\nSet `GROQ_API_KEY` or `OPENAI_API_KEY` in your environment and restart.\n' +
    'Groq: https://console.groq.com — OpenAI: https://platform.openai.com'
  );
}

cmd(
  { pattern: 'ai|gpt|chat', desc: 'Chat with AI (Groq/OpenAI)', category: 'ai', filename: 'ai.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .ai your question');
    if (!config.GROQ_API_KEY && !config.OPENAI_API_KEY) return m.reply(missingKeyMsg());
    try {
      await m.react('🤖');
      const out = await chatCompletion([
        { role: 'system', content: `You are ${config.BOT_NAME}, a helpful WhatsApp assistant.` },
        { role: 'user', content: text },
      ]);
      await m.reply(out || 'No response.');
    } catch (e) {
      await m.reply(`AI error: ${e.response?.data?.error?.message || e.message}`);
    }
  }
);

cmd(
  { pattern: 'imagine|image', desc: 'AI image (OpenAI DALL·E if key set)', category: 'ai', filename: 'ai.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .imagine a cat astronaut');
    if (!config.OPENAI_API_KEY) {
      return m.reply(
        '⚠️ Image generation needs `OPENAI_API_KEY` (DALL·E). Groq does not provide images.'
      );
    }
    try {
      await m.react('🎨');
      const { data } = await axios.post(
        'https://api.openai.com/v1/images/generations',
        { model: 'dall-e-3', prompt: text, size: '1024x1024', n: 1 },
        {
          headers: {
            Authorization: `Bearer ${config.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          timeout: 120000,
        }
      );
      const url = data.data?.[0]?.url;
      if (!url) return m.reply('No image returned.');
      await sock.sendMessage(m.chat, { image: { url }, caption: `🎨 ${text}` }, { quoted: m });
    } catch (e) {
      await m.reply(`Image error: ${e.response?.data?.error?.message || e.message}`);
    }
  }
);

cmd(
  { pattern: 'gemini|bot', desc: 'Alias chat AI', category: 'ai', filename: 'ai.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .bot hello');
    if (!config.GROQ_API_KEY && !config.OPENAI_API_KEY) return m.reply(missingKeyMsg());
    try {
      const out = await chatCompletion([
        { role: 'system', content: `You are ${config.BOT_NAME}.` },
        { role: 'user', content: text },
      ]);
      await m.reply(out || 'Empty.');
    } catch (e) {
      await m.reply(`Error: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'summarize|summary', desc: 'Summarize text with AI', category: 'ai', filename: 'ai.js' },
  async (sock, m, { text }) => {
    const body = text || m.quoted?.body;
    if (!body) return m.reply('Provide text or reply to a message.');
    if (!config.GROQ_API_KEY && !config.OPENAI_API_KEY) return m.reply(missingKeyMsg());
    try {
      const out = await chatCompletion([
        { role: 'user', content: `Summarize briefly:\n\n${body.slice(0, 6000)}` },
      ]);
      await m.reply(out || 'Empty.');
    } catch (e) {
      await m.reply(`Error: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'translateai|trai', desc: 'AI translate to language', category: 'ai', filename: 'ai.js' },
  async (sock, m, { args, text }) => {
    if (!config.GROQ_API_KEY && !config.OPENAI_API_KEY) return m.reply(missingKeyMsg());
    const lang = args[0];
    const rest = args.slice(1).join(' ') || m.quoted?.body;
    if (!lang || !rest) return m.reply('Usage: .trai urdu Hello world');
    try {
      const out = await chatCompletion([
        { role: 'user', content: `Translate to ${lang}. Only output translation:\n${rest}` },
      ]);
      await m.reply(out || 'Empty.');
    } catch (e) {
      await m.reply(`Error: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'code', desc: 'AI coding help', category: 'ai', filename: 'ai.js' },
  async (sock, m, { text }) => {
    if (!text) return m.reply('Usage: .code explain this JS snippet...');
    if (!config.GROQ_API_KEY && !config.OPENAI_API_KEY) return m.reply(missingKeyMsg());
    try {
      const out = await chatCompletion([
        { role: 'system', content: 'You are a senior software engineer. Be concise.' },
        { role: 'user', content: text },
      ]);
      await m.reply(out || 'Empty.');
    } catch (e) {
      await m.reply(`Error: ${e.message}`);
    }
  }
);

cmd(
  { pattern: 'aicheck', desc: 'Check which AI keys are set', category: 'ai', filename: 'ai.js' },
  async (sock, m) => {
    await m.reply(
      `*AI Status*\n• GROQ_API_KEY: ${config.GROQ_API_KEY ? '✅ set' : '❌ missing'}\n• OPENAI_API_KEY: ${config.OPENAI_API_KEY ? '✅ set' : '❌ missing'}\n• Models: groq=${config.GROQ_MODEL}, openai=${config.OPENAI_MODEL}`
    );
  }
);
