import { cmd } from '../command.js';
import { pick } from '../lib/functions.js';

const ttt = new Map(); // chat -> board state
const rpsMap = { rock: 'rock', paper: 'paper', scissors: 'scissors', r: 'rock', p: 'paper', s: 'scissors' };

function emptyBoard() {
  return Array(9).fill(null);
}
function render(board) {
  const cells = board.map((v, i) => v || String(i + 1));
  return `
 ${cells[0]} | ${cells[1]} | ${cells[2]}
---+---+---
 ${cells[3]} | ${cells[4]} | ${cells[5]}
---+---+---
 ${cells[6]} | ${cells[7]} | ${cells[8]}
`.trim();
}
function winner(b) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, c, d] of lines) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  }
  if (b.every(Boolean)) return 'draw';
  return null;
}

cmd({ pattern: 'ttt|tictactoe', desc: 'Play tic-tac-toe vs bot', category: 'games', filename: 'games.js' }, async (s, m, { args }) => {
  const key = m.chat;
  if ((args[0] || '').toLowerCase() === 'reset') {
    ttt.delete(key);
    return m.reply('TTT reset.');
  }
  let state = ttt.get(key);
  if (!state) {
    state = { board: emptyBoard(), turn: 'X' };
    ttt.set(key, state);
    return m.reply(`Tic-Tac-Toe started! You are X.\nUse \`.ttt <1-9>\`\n\n${render(state.board)}`);
  }
  const pos = Number(args[0]) - 1;
  if (pos < 0 || pos > 8 || state.board[pos]) return m.reply(`Invalid move.\n${render(state.board)}`);
  state.board[pos] = 'X';
  let w = winner(state.board);
  if (w) {
    ttt.delete(key);
    return m.reply(w === 'draw' ? `Draw!\n${render(state.board)}` : `You win!\n${render(state.board)}`);
  }
  const empties = state.board.map((v, i) => (v ? null : i)).filter((x) => x !== null);
  const botPos = pick(empties);
  state.board[botPos] = 'O';
  w = winner(state.board);
  if (w) {
    ttt.delete(key);
    return m.reply(w === 'draw' ? `Draw!\n${render(state.board)}` : w === 'O' ? `Bot wins!\n${render(state.board)}` : `You win!\n${render(state.board)}`);
  }
  await m.reply(`Bot played ${botPos + 1}\n\n${render(state.board)}`);
});

cmd({ pattern: 'rps', desc: 'Rock paper scissors', category: 'games', filename: 'games.js' }, async (s, m, { args }) => {
  const you = rpsMap[(args[0] || '').toLowerCase()];
  if (!you) return m.reply('Usage: .rps rock|paper|scissors');
  const bot = pick(['rock', 'paper', 'scissors']);
  let result = 'Draw';
  if (you === 'rock' && bot === 'scissors') result = 'You win';
  if (you === 'paper' && bot === 'rock') result = 'You win';
  if (you === 'scissors' && bot === 'paper') result = 'You win';
  if (you !== bot && result === 'Draw') result = 'You lose';
  await m.reply(`You: *${you}*\nBot: *${bot}*\n→ ${result}`);
});

cmd({ pattern: 'slots', desc: 'Slot machine', category: 'games', filename: 'games.js' }, async (s, m) => {
  const symbols = ['🍒', '🍋', '🍉', '⭐', '💎', '7️⃣'];
  const a = pick(symbols), b = pick(symbols), c = pick(symbols);
  const win = a === b && b === c;
  await m.reply(`🎰 | ${a} | ${b} | ${c} |\n${win ? '🎉 Jackpot!' : 'Try again!'}`);
});

cmd({ pattern: 'guess', desc: 'Guess number 1-10', category: 'games', filename: 'games.js' }, async (s, m, { args }) => {
  const n = Number(args[0]);
  if (!n || n < 1 || n > 10) return m.reply('Usage: .guess <1-10>');
  const secret = 1 + Math.floor(Math.random() * 10);
  await m.reply(n === secret ? `🎉 Correct! It was ${secret}` : `Nope, it was ${secret}`);
});

cmd({ pattern: 'math', desc: 'Quick math challenge', category: 'games', filename: 'games.js' }, async (s, m, { args }) => {
  if (!args[0]) {
    const a = 1 + Math.floor(Math.random() * 20);
    const b = 1 + Math.floor(Math.random() * 20);
    const op = pick(['+', '-', '*']);
    global.__math = { chat: m.chat, ans: op === '+' ? a + b : op === '-' ? a - b : a * b };
    return m.reply(`Solve: *${a} ${op} ${b}* — reply with \`.math <answer>\``);
  }
  const expected = global.__math?.chat === m.chat ? global.__math.ans : null;
  if (expected === null) return m.reply('No pending question. Use `.math`');
  const ok = Number(args[0]) === expected;
  global.__math = null;
  await m.reply(ok ? '✅ Correct!' : `❌ Wrong. Answer was ${expected}`);
});

cmd({ pattern: 'quiz', desc: 'Simple quiz', category: 'games', filename: 'games.js' }, async (s, m, { args }) => {
  const bank = [
    { q: 'Capital of France?', a: 'paris' },
    { q: '2 + 2 * 2 = ?', a: '6' },
    { q: 'Planet known as Red Planet?', a: 'mars' },
    { q: 'HTML stands for?', a: 'hypertext markup language' },
  ];
  if (!args[0]) {
    const item = pick(bank);
    global.__quiz = { chat: m.chat, a: item.a };
    return m.reply(`❓ ${item.q}\nAnswer with \`.quiz <answer>\``);
  }
  if (!global.__quiz || global.__quiz.chat !== m.chat) return m.reply('No quiz active. Use `.quiz`');
  const ok = args.join(' ').toLowerCase().trim() === global.__quiz.a;
  global.__quiz = null;
  await m.reply(ok ? '✅ Correct!' : '❌ Wrong.');
});

cmd({ pattern: '8ball', desc: 'Magic 8-ball', category: 'games', filename: 'games.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Ask a yes/no question.');
  const answers = ['Yes.', 'No.', 'Maybe.', 'Ask again later.', 'Definitely!', 'I doubt it.', 'Absolutely.', 'Not a chance.'];
  await m.reply(`🎱 ${pick(answers)}`);
});

cmd({ pattern: 'truth', desc: 'Truth question', category: 'games', filename: 'games.js' }, async (s, m) => {
  await m.reply(
    '🗣️ ' +
      pick([
        'What is your biggest fear?',
        'What is a secret talent you have?',
        'Who was your first crush?',
        'What is the most embarrassing thing you did?',
      ])
  );
});

cmd({ pattern: 'dare', desc: 'Dare challenge', category: 'games', filename: 'games.js' }, async (s, m) => {
  await m.reply(
    '😈 ' +
      pick([
        'Send a funny selfie in the group (if you want).',
        'Type a message with your eyes closed.',
        'Compliment the next person who texts.',
        'Change your status to something silly for 10 minutes.',
      ])
  );
});

cmd({ pattern: 'wyr', desc: 'Would you rather', category: 'games', filename: 'games.js' }, async (s, m) => {
  await m.reply(
    '🤔 Would you rather...\n' +
      pick([
        'Be able to fly OR be invisible?',
        'Always be 10 min late OR 20 min early?',
        'Have unlimited battery OR unlimited data?',
        'Only whisper OR only shout?',
      ])
  );
});

cmd({ pattern: 'hangman', desc: 'Hangman word game', category: 'games', filename: 'games.js' }, async (s, m, { args }) => {
  const words = ['javascript', 'whatsapp', 'baileys', 'malik', 'plugin', 'mongodb', 'express'];
  const key = m.chat;
  if (!global.__hang) global.__hang = {};
  if (!args[0] || args[0] === 'new') {
    const word = pick(words);
    global.__hang[key] = { word, guessed: new Set(), left: 6 };
    return m.reply(`Hangman started!\n\`${'_ '.repeat(word.length).trim()}\`\nGuess: .hangman <letter>`);
  }
  const g = global.__hang[key];
  if (!g) return m.reply('No game. Use `.hangman new`');
  const letter = args[0][0].toLowerCase();
  if (g.guessed.has(letter)) return m.reply('Already guessed.');
  g.guessed.add(letter);
  if (!g.word.includes(letter)) g.left -= 1;
  const shown = [...g.word].map((c) => (g.guessed.has(c) ? c : '_')).join(' ');
  if (![...g.word].some((c) => !g.guessed.has(c))) {
    delete global.__hang[key];
    return m.reply(`🎉 You won! Word: *${g.word}*`);
  }
  if (g.left <= 0) {
    delete global.__hang[key];
    return m.reply(`💀 Game over. Word was *${g.word}*`);
  }
  await m.reply(`${shown}\nLives: ${g.left}\nGuessed: ${[...g.guessed].join(', ')}`);
});
