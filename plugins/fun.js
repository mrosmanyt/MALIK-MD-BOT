import axios from 'axios';
import { cmd } from '../command.js';
import { pick, toFancy } from '../lib/functions.js';

const jokes = [
  'Why do programmers prefer dark mode? Because light attracts bugs.',
  'There are only 10 kinds of people: those who understand binary and those who don’t.',
  'A SQL query walks into a bar, walks up to two tables and asks: Can I join you?',
  'Why did the developer go broke? Because he used up all his cache.',
  'I would tell you a UDP joke, but you might not get it.',
  'In a world without fences and walls, who needs Gates and Windows?',
  'How many programmers does it take to change a light bulb? None, that’s a hardware problem.',
  'Why do Java developers wear glasses? Because they don’t C#.',
];

const quotes = [
  ['The only way to do great work is to love what you do.', 'Steve Jobs'],
  ['Code is like humor. When you have to explain it, it’s bad.', 'Cory House'],
  ['First, solve the problem. Then, write the code.', 'John Johnson'],
  ['Experience is the name everyone gives to their mistakes.', 'Oscar Wilde'],
  ['Simplicity is the soul of efficiency.', 'Austin Freeman'],
];

const facts = [
  'Honey never spoils. Edible honey was found in ancient Egyptian tombs.',
  'Octopuses have three hearts.',
  'Bananas are berries, but strawberries are not.',
  'A day on Venus is longer than a year on Venus.',
  'Sharks existed before trees.',
  'Your brain uses about 20% of your body’s energy.',
];

const flirts = [
  'Are you Wi‑Fi? Because I’m feeling a connection.',
  'Is your name Google? Because you have everything I’ve been searching for.',
  'Do you have a map? I keep getting lost in your eyes.',
  'If you were a vegetable, you’d be a cute-cumber.',
];

const insults = [
  'You’re not stupid; you just have bad luck thinking.',
  'I’d agree with you but then we’d both be wrong.',
  'You bring everyone so much joy… when you leave the room.',
  'Somewhere out there is a tree tirelessly producing oxygen for you. You owe it an apology.',
];

cmd({ pattern: 'joke', desc: 'Random joke', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  await m.reply(`😂 ${pick(jokes)}`);
});

cmd({ pattern: 'quote', desc: 'Inspirational quote', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  const [q, a] = pick(quotes);
  await m.reply(`💬 “${q}”\n— *${a}*`);
});

cmd({ pattern: 'fact', desc: 'Random fun fact', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  await m.reply(`🧠 ${pick(facts)}`);
});

cmd({ pattern: 'flirt', desc: 'Flirty line', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  await m.reply(`😏 ${pick(flirts)}`);
});

cmd({ pattern: 'insult', desc: 'Playful roast (harmless)', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  await m.reply(`🔥 ${pick(insults)}`);
});

cmd({ pattern: 'fancy|style', desc: 'Fancy unicode text', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .fancy hello');
  await m.reply(toFancy(text));
});

cmd({ pattern: 'reverse', desc: 'Reverse text', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .reverse text');
  await m.reply([...text].reverse().join(''));
});

cmd({ pattern: 'mock', desc: 'sPoNgEbOb text', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .mock text');
  await m.reply(
    [...text]
      .map((c, i) => (i % 2 ? c.toUpperCase() : c.toLowerCase()))
      .join('')
  );
});

cmd({ pattern: 'emojify', desc: 'Add emojis between words', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .emojify hello world');
  const em = ['✨', '🔥', '💫', '🌟', '⚡', '💖'];
  await m.reply(text.split(/\s+/).map((w) => `${w} ${pick(em)}`).join(' '));
});

cmd({ pattern: 'pick|choose', desc: 'Pick from options a|b|c', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  const opts = (text || '').split(/[|,\/]/).map((x) => x.trim()).filter(Boolean);
  if (opts.length < 2) return m.reply('Usage: .pick tea|coffee|juice');
  await m.reply(`🎯 I pick: *${pick(opts)}*`);
});

cmd({ pattern: 'rate', desc: 'Rate something 0-100', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  const target = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 I rate *${target}* a *${score}/100*`);
});

cmd({ pattern: 'ship', desc: 'Ship two names', category: 'fun', filename: 'fun.js' }, async (s, m, { args }) => {
  const a = args[0] || m.pushName;
  const b = args[1] || 'someone';
  const pct = Math.floor(Math.random() * 101);
  await m.reply(`💘 *${a}* ❤️ *${b}*\nCompatibility: *${pct}%*`);
});

cmd({ pattern: 'compat', desc: 'Compatibility meter', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .compat name1 name2');
  const pct = Math.floor(Math.random() * 101);
  await m.reply(`💞 Compatibility for ${text}: *${pct}%*`);
});

cmd({ pattern: 'gayrate|gay', desc: 'Joke meter', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  await m.reply(`🏳️‍🌈 ${text || m.pushName}: *${Math.floor(Math.random() * 101)}%* (joke meter)`);
});

cmd({ pattern: 'stupid|iq', desc: 'Joke IQ meter', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  await m.reply(`🧠 IQ of ${text || m.pushName}: *${40 + Math.floor(Math.random() * 120)}*`);
});

cmd({ pattern: 'love', desc: 'Love calculator', category: 'fun', filename: 'fun.js' }, async (s, m, { args }) => {
  const a = args[0] || 'You';
  const b = args[1] || 'Them';
  await m.reply(`❤️ ${a} + ${b} = *${Math.floor(Math.random() * 101)}%* love`);
});

cmd({ pattern: 'advice', desc: 'Random advice (API)', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  try {
    const { data } = await axios.get('https://api.adviceslip.com/advice', { timeout: 10000 });
    await m.reply(`💡 ${data?.slip?.advice || pick(quotes)[0]}`);
  } catch {
    await m.reply(`💡 ${pick(quotes)[0]}`);
  }
});

cmd({ pattern: 'dadjoke', desc: 'Dad joke API', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  try {
    const { data } = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
      timeout: 10000,
    });
    await m.reply(`👨 ${data.joke}`);
  } catch {
    await m.reply(`👨 ${pick(jokes)}`);
  }
});

cmd({ pattern: 'compliment', desc: 'Nice compliment', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  try {
    const { data } = await axios.get('https://complimentr.com/api', { timeout: 10000 });
    await m.reply(`🌸 ${data.compliment}`);
  } catch {
    await m.reply('🌸 You light up every chat you join.');
  }
});

cmd({ pattern: 'affirmation', desc: 'Positive affirmation', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  try {
    const { data } = await axios.get('https://www.affirmations.dev/', { timeout: 10000 });
    await m.reply(`✨ ${data.affirmation}`);
  } catch {
    await m.reply('✨ You are capable of amazing things.');
  }
});

cmd({ pattern: 'coin|flip', desc: 'Flip a coin', category: 'fun', filename: 'fun.js' }, async (s, m) => {
  await m.reply(`🪙 ${Math.random() < 0.5 ? 'Heads' : 'Tails'}`);
});

cmd({ pattern: 'dice|roll', desc: 'Roll dice NdM', category: 'fun', filename: 'fun.js' }, async (s, m, { args }) => {
  const spec = args[0] || '1d6';
  const match = /^(\d{1,2})d(\d{1,3})$/i.exec(spec);
  const n = match ? Math.min(10, Number(match[1])) : 1;
  const sides = match ? Math.min(1000, Number(match[2])) : Number(spec) || 6;
  const rolls = Array.from({ length: n }, () => 1 + Math.floor(Math.random() * sides));
  await m.reply(`🎲 ${rolls.join(', ')} (sum ${rolls.reduce((a, b) => a + b, 0)})`);
});

cmd({ pattern: 'password|pw', desc: 'Generate random password', category: 'fun', filename: 'fun.js' }, async (s, m, { args }) => {
  const len = Math.min(64, Math.max(8, Number(args[0]) || 16));
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let out = '';
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  await m.reply(`🔑 \`${out}\``);
});

cmd({ pattern: 'wavatar|avatar', desc: 'Dicebear avatar URL', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  const seed = encodeURIComponent(text || m.pushName || 'malik');
  const url = `https://api.dicebear.com/7.x/avataaars/png?seed=${seed}`;
  try {
    await sockSendImage(s, m, url, `Avatar for ${text || m.pushName}`);
  } catch {
    await m.reply(url);
  }
});

async function sockSendImage(sock, m, url, caption) {
  await sock.sendMessage(m.chat, { image: { url }, caption }, { quoted: m });
}

cmd({ pattern: 'say', desc: 'Bot repeats text', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .say hello');
  await s.sendMessage(m.chat, { text });
});

cmd({ pattern: 'readmore', desc: 'Insert read more break', category: 'fun', filename: 'fun.js' }, async (s, m, { text }) => {
  const [a, b] = (text || 'Hello|World').split('|');
  await m.reply(`${a || 'Hello'}${String.fromCharCode(8206).repeat(4000)}${b || 'World'}`);
});
