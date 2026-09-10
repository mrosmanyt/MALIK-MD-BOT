/**
 * Extra fun commands adapted from Jawad-MD (obfuscated → clean reimpl) + private2.
 */
import axios from 'axios';
import { cmd } from '../command.js';
import { pick } from '../lib/functions.js';

const pickups = [
  'Are you a magician? Because whenever I look at you, everyone else disappears.',
  'Do you have a Band-Aid? I just scraped my knee falling for you.',
  'If you were a vegetable, you’d be a cute-cumber.',
  'Are you made of copper and tellurium? Because you’re Cu-Te.',
  'Is your name Wi-Fi? Because I’m feeling a connection.',
];

const shayaris = [
  'Dil ke kone mein chhupa ke rakhun tujhe…\nDuniya se chhupa ke rakhun tujhe.',
  'Mohabbat ek aisi kitaab hai…\nJiski har panne pe sirf tu likha hai.',
  'Teri muskaan se din ban jata hai…\nTeri baaton se sukoon mil jata hai.',
  'Kuch baatein dil mein reh jaati hain…\nJo lafzon tak nahi aa paati.',
];

const motivations = [
  'Small steps every day beat big plans you never start.',
  'Your only limit is the story you keep telling yourself.',
  'Discipline is choosing what you want most over what you want now.',
  'Progress, not perfection.',
];

cmd(
  { pattern: 'pickup|pickupline', desc: 'Random pickup line', category: 'fun', filename: 'jawad-fun.js' },
  async (sock, m) => {
    try {
      const { data } = await axios.get('https://shizoapi.onrender.com/api/texts/flirt?apikey=shizo', {
        timeout: 12000,
      });
      await m.reply(`💘 ${data?.result || pick(pickups)}`);
    } catch {
      await m.reply(`💘 ${pick(pickups)}`);
    }
  }
);

cmd(
  { pattern: 'shayari|poetry', desc: 'Random Urdu/Hindi shayari', category: 'fun', filename: 'jawad-fun.js' },
  async (sock, m) => {
    try {
      const { data } = await axios.get('https://shizoapi.onrender.com/api/texts/shayari?apikey=shizo', {
        timeout: 12000,
      });
      await m.reply(`💖 ${data?.result || pick(shayaris)}`);
    } catch {
      await m.reply(`💖 ${pick(shayaris)}`);
    }
  }
);

cmd(
  { pattern: 'motivation|inspire', desc: 'Motivational line', category: 'fun', filename: 'jawad-fun.js' },
  async (sock, m) => {
    try {
      const { data } = await axios.get('https://api.quotable.io/random?tags=inspirational', { timeout: 10000 });
      if (data?.content) return m.reply(`💪 “${data.content}”\n— *${data.author}*`);
    } catch {}
    await m.reply(`💪 ${pick(motivations)}`);
  }
);

cmd(
  { pattern: 'goodnight|gn', desc: 'Good night wish', category: 'fun', filename: 'jawad-fun.js' },
  async (sock, m, { text }) => {
    const who = text || m.pushName || 'friend';
    await m.reply(`🌙 Good night, *${who}*. Sleep well and recharge.`);
  }
);

cmd(
  { pattern: 'thankyou|thanks', desc: 'Thank-you message', category: 'fun', filename: 'jawad-fun.js' },
  async (sock, m, { text }) => {
    await m.reply(`🙏 Thank you${text ? `, ${text}` : ''}! Appreciate you.`);
  }
);

cmd(
  { pattern: 'hack', desc: 'Fake “hacking” prank animation text', category: 'fun', filename: 'jawad-fun.js' },
  async (sock, m, { text }) => {
    const target = text || m.quoted?.sender?.split('@')[0] || m.pushName || 'target';
    await m.reply(
      `💻 *Fake Hack*\nTarget: ${target}\n[████████░░] 80%\nBypassing firewall...\n` +
        `Injecting memes...\n✅ Prank complete. (Not real hacking.)`
    );
  }
);

cmd(
  { pattern: 'character', desc: 'Random fun character for a user', category: 'fun', filename: 'jawad-fun.js' },
  async (sock, m) => {
    const traits = [
      'Hero', 'Villain', 'Clown', 'Genius', 'Chaos gremlin', 'Main character',
      'Sidekick', 'NPC energy', 'Boss battle', 'Softie', 'Menace', 'Legend',
    ];
    const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
    const name = jid.split('@')[0];
    const trait = pick(traits);
    await sock.sendMessage(
      m.chat,
      { text: `🎭 Character of @${name}: *${trait}*`, mentions: [jid] },
      { quoted: m }
    );
  }
);
