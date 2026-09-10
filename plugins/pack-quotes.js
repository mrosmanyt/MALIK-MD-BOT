/** Themed quote packs */
import { cmd } from '../command.js';
import { pick } from '../lib/functions.js';

const Q = {
  "success": [
    "Success is not final; failure is not fatal.",
    "Dream big. Start small. Act now.",
    "Done is better than perfect."
  ],
  "failure": [
    "Fail fast, learn faster.",
    "Every expert was once a beginner.",
    "Mistakes are proof you are trying."
  ],
  "love": [
    "Love is a verb.",
    "Where there is love there is life.",
    "To love is to recognize yourself in another."
  ],
  "friendship": [
    "Friends are the family we choose.",
    "A real friend walks in when the rest walk out.",
    "Friendship doubles joy."
  ],
  "life": [
    "Life is short. Smile while you still have teeth.",
    "In the middle of difficulty lies opportunity.",
    "Be yourself; everyone else is taken."
  ],
  "coding": [
    "Talk is cheap. Show me the code.",
    "First, solve the problem. Then, write the code.",
    "Code is poetry."
  ],
  "islamic": [
    "Indeed, with hardship comes ease.",
    "Allah does not burden a soul beyond that it can bear.",
    "Verily in the remembrance of Allah do hearts find rest."
  ],
  "motivation": [
    "The secret of getting ahead is getting started.",
    "Believe you can and you are halfway there.",
    "It always seems impossible until it is done."
  ],
  "funny": [
    "I am not lazy, I am on energy saving mode.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "I need a six month holiday, twice a year."
  ],
  "wisdom": [
    "Knowing yourself is the beginning of all wisdom.",
    "The only true wisdom is in knowing you know nothing.",
    "Patience is bitter, but its fruit is sweet."
  ],
  "leadership": [
    "A leader is one who knows the way, goes the way, and shows the way.",
    "Leadership is action, not position.",
    "The greatest leader is not necessarily the one who does the greatest things."
  ],
  "health": [
    "Take care of your body. It is the only place you have to live.",
    "Health is wealth.",
    "An apple a day keeps the doctor away."
  ],
  "money": [
    "Do not save what is left after spending; spend what is left after saving.",
    "A penny saved is a penny earned.",
    "Wealth consists not in having great possessions, but in having few wants."
  ],
  "time": [
    "Lost time is never found again.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Time is what we want most, but what we use worst."
  ],
  "focus": [
    "Focus on being productive instead of busy.",
    "Where focus goes, energy flows.",
    "One thing at a time."
  ],
  "gratitude": [
    "Gratitude turns what we have into enough.",
    "Be thankful for what you have.",
    "Enjoy the little things."
  ],
  "courage": [
    "Courage is not the absence of fear.",
    "Feel the fear and do it anyway.",
    "Fortune favors the bold."
  ],
  "patience": [
    "Patience is not the ability to wait, but how you act while waiting.",
    "Rivers know this: there is no hurry.",
    "Slow and steady wins the race."
  ],
  "kindness": [
    "Kindness is a language the deaf can hear and the blind can see.",
    "No act of kindness is ever wasted.",
    "Be kind whenever possible. It is always possible."
  ],
  "peace": [
    "Peace begins with a smile.",
    "Nobody can bring you peace but yourself.",
    "Inner peace begins the moment you choose not to allow another person or event to control your emotions."
  ]
};

cmd({ pattern: 'qsuccess|quotesuccess', desc: 'success quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.success)}`);
});

cmd({ pattern: 'qfailure|quotefailure', desc: 'failure quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.failure)}`);
});

cmd({ pattern: 'qlove|quotelove', desc: 'love quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.love)}`);
});

cmd({ pattern: 'qfriendship|quotefriendship', desc: 'friendship quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.friendship)}`);
});

cmd({ pattern: 'qlife|quotelife', desc: 'life quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.life)}`);
});

cmd({ pattern: 'qcoding|quotecoding', desc: 'coding quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.coding)}`);
});

cmd({ pattern: 'qislamic|quoteislamic', desc: 'islamic quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.islamic)}`);
});

cmd({ pattern: 'qmotivation|quotemotivation', desc: 'motivation quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.motivation)}`);
});

cmd({ pattern: 'qfunny|quotefunny', desc: 'funny quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.funny)}`);
});

cmd({ pattern: 'qwisdom|quotewisdom', desc: 'wisdom quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.wisdom)}`);
});

cmd({ pattern: 'qleadership|quoteleadership', desc: 'leadership quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.leadership)}`);
});

cmd({ pattern: 'qhealth|quotehealth', desc: 'health quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.health)}`);
});

cmd({ pattern: 'qmoney|quotemoney', desc: 'money quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.money)}`);
});

cmd({ pattern: 'qtime|quotetime', desc: 'time quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.time)}`);
});

cmd({ pattern: 'qfocus|quotefocus', desc: 'focus quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.focus)}`);
});

cmd({ pattern: 'qgratitude|quotegratitude', desc: 'gratitude quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.gratitude)}`);
});

cmd({ pattern: 'qcourage|quotecourage', desc: 'courage quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.courage)}`);
});

cmd({ pattern: 'qpatience|quotepatience', desc: 'patience quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.patience)}`);
});

cmd({ pattern: 'qkindness|quotekindness', desc: 'kindness quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.kindness)}`);
});

cmd({ pattern: 'qpeace|quotepeace', desc: 'peace quote', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 ${pick(Q.peace)}`);
});

const ALL = Object.values(Q).flat();
cmd({ pattern: 'quote1', desc: 'Quote slot 1', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${1} ${ALL[(1-1) % ALL.length]}`);
});

cmd({ pattern: 'quote2', desc: 'Quote slot 2', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${2} ${ALL[(2-1) % ALL.length]}`);
});

cmd({ pattern: 'quote3', desc: 'Quote slot 3', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${3} ${ALL[(3-1) % ALL.length]}`);
});

cmd({ pattern: 'quote4', desc: 'Quote slot 4', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${4} ${ALL[(4-1) % ALL.length]}`);
});

cmd({ pattern: 'quote5', desc: 'Quote slot 5', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${5} ${ALL[(5-1) % ALL.length]}`);
});

cmd({ pattern: 'quote6', desc: 'Quote slot 6', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${6} ${ALL[(6-1) % ALL.length]}`);
});

cmd({ pattern: 'quote7', desc: 'Quote slot 7', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${7} ${ALL[(7-1) % ALL.length]}`);
});

cmd({ pattern: 'quote8', desc: 'Quote slot 8', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${8} ${ALL[(8-1) % ALL.length]}`);
});

cmd({ pattern: 'quote9', desc: 'Quote slot 9', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${9} ${ALL[(9-1) % ALL.length]}`);
});

cmd({ pattern: 'quote10', desc: 'Quote slot 10', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${10} ${ALL[(10-1) % ALL.length]}`);
});

cmd({ pattern: 'quote11', desc: 'Quote slot 11', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${11} ${ALL[(11-1) % ALL.length]}`);
});

cmd({ pattern: 'quote12', desc: 'Quote slot 12', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${12} ${ALL[(12-1) % ALL.length]}`);
});

cmd({ pattern: 'quote13', desc: 'Quote slot 13', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${13} ${ALL[(13-1) % ALL.length]}`);
});

cmd({ pattern: 'quote14', desc: 'Quote slot 14', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${14} ${ALL[(14-1) % ALL.length]}`);
});

cmd({ pattern: 'quote15', desc: 'Quote slot 15', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${15} ${ALL[(15-1) % ALL.length]}`);
});

cmd({ pattern: 'quote16', desc: 'Quote slot 16', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${16} ${ALL[(16-1) % ALL.length]}`);
});

cmd({ pattern: 'quote17', desc: 'Quote slot 17', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${17} ${ALL[(17-1) % ALL.length]}`);
});

cmd({ pattern: 'quote18', desc: 'Quote slot 18', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${18} ${ALL[(18-1) % ALL.length]}`);
});

cmd({ pattern: 'quote19', desc: 'Quote slot 19', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${19} ${ALL[(19-1) % ALL.length]}`);
});

cmd({ pattern: 'quote20', desc: 'Quote slot 20', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${20} ${ALL[(20-1) % ALL.length]}`);
});

cmd({ pattern: 'quote21', desc: 'Quote slot 21', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${21} ${ALL[(21-1) % ALL.length]}`);
});

cmd({ pattern: 'quote22', desc: 'Quote slot 22', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${22} ${ALL[(22-1) % ALL.length]}`);
});

cmd({ pattern: 'quote23', desc: 'Quote slot 23', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${23} ${ALL[(23-1) % ALL.length]}`);
});

cmd({ pattern: 'quote24', desc: 'Quote slot 24', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${24} ${ALL[(24-1) % ALL.length]}`);
});

cmd({ pattern: 'quote25', desc: 'Quote slot 25', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${25} ${ALL[(25-1) % ALL.length]}`);
});

cmd({ pattern: 'quote26', desc: 'Quote slot 26', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${26} ${ALL[(26-1) % ALL.length]}`);
});

cmd({ pattern: 'quote27', desc: 'Quote slot 27', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${27} ${ALL[(27-1) % ALL.length]}`);
});

cmd({ pattern: 'quote28', desc: 'Quote slot 28', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${28} ${ALL[(28-1) % ALL.length]}`);
});

cmd({ pattern: 'quote29', desc: 'Quote slot 29', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${29} ${ALL[(29-1) % ALL.length]}`);
});

cmd({ pattern: 'quote30', desc: 'Quote slot 30', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${30} ${ALL[(30-1) % ALL.length]}`);
});

cmd({ pattern: 'quote31', desc: 'Quote slot 31', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${31} ${ALL[(31-1) % ALL.length]}`);
});

cmd({ pattern: 'quote32', desc: 'Quote slot 32', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${32} ${ALL[(32-1) % ALL.length]}`);
});

cmd({ pattern: 'quote33', desc: 'Quote slot 33', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${33} ${ALL[(33-1) % ALL.length]}`);
});

cmd({ pattern: 'quote34', desc: 'Quote slot 34', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${34} ${ALL[(34-1) % ALL.length]}`);
});

cmd({ pattern: 'quote35', desc: 'Quote slot 35', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${35} ${ALL[(35-1) % ALL.length]}`);
});

cmd({ pattern: 'quote36', desc: 'Quote slot 36', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${36} ${ALL[(36-1) % ALL.length]}`);
});

cmd({ pattern: 'quote37', desc: 'Quote slot 37', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${37} ${ALL[(37-1) % ALL.length]}`);
});

cmd({ pattern: 'quote38', desc: 'Quote slot 38', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${38} ${ALL[(38-1) % ALL.length]}`);
});

cmd({ pattern: 'quote39', desc: 'Quote slot 39', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${39} ${ALL[(39-1) % ALL.length]}`);
});

cmd({ pattern: 'quote40', desc: 'Quote slot 40', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${40} ${ALL[(40-1) % ALL.length]}`);
});

cmd({ pattern: 'quote41', desc: 'Quote slot 41', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${41} ${ALL[(41-1) % ALL.length]}`);
});

cmd({ pattern: 'quote42', desc: 'Quote slot 42', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${42} ${ALL[(42-1) % ALL.length]}`);
});

cmd({ pattern: 'quote43', desc: 'Quote slot 43', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${43} ${ALL[(43-1) % ALL.length]}`);
});

cmd({ pattern: 'quote44', desc: 'Quote slot 44', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${44} ${ALL[(44-1) % ALL.length]}`);
});

cmd({ pattern: 'quote45', desc: 'Quote slot 45', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${45} ${ALL[(45-1) % ALL.length]}`);
});

cmd({ pattern: 'quote46', desc: 'Quote slot 46', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${46} ${ALL[(46-1) % ALL.length]}`);
});

cmd({ pattern: 'quote47', desc: 'Quote slot 47', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${47} ${ALL[(47-1) % ALL.length]}`);
});

cmd({ pattern: 'quote48', desc: 'Quote slot 48', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${48} ${ALL[(48-1) % ALL.length]}`);
});

cmd({ pattern: 'quote49', desc: 'Quote slot 49', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${49} ${ALL[(49-1) % ALL.length]}`);
});

cmd({ pattern: 'quote50', desc: 'Quote slot 50', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${50} ${ALL[(50-1) % ALL.length]}`);
});

cmd({ pattern: 'quote51', desc: 'Quote slot 51', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${51} ${ALL[(51-1) % ALL.length]}`);
});

cmd({ pattern: 'quote52', desc: 'Quote slot 52', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${52} ${ALL[(52-1) % ALL.length]}`);
});

cmd({ pattern: 'quote53', desc: 'Quote slot 53', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${53} ${ALL[(53-1) % ALL.length]}`);
});

cmd({ pattern: 'quote54', desc: 'Quote slot 54', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${54} ${ALL[(54-1) % ALL.length]}`);
});

cmd({ pattern: 'quote55', desc: 'Quote slot 55', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${55} ${ALL[(55-1) % ALL.length]}`);
});

cmd({ pattern: 'quote56', desc: 'Quote slot 56', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${56} ${ALL[(56-1) % ALL.length]}`);
});

cmd({ pattern: 'quote57', desc: 'Quote slot 57', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${57} ${ALL[(57-1) % ALL.length]}`);
});

cmd({ pattern: 'quote58', desc: 'Quote slot 58', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${58} ${ALL[(58-1) % ALL.length]}`);
});

cmd({ pattern: 'quote59', desc: 'Quote slot 59', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${59} ${ALL[(59-1) % ALL.length]}`);
});

cmd({ pattern: 'quote60', desc: 'Quote slot 60', category: 'fun', filename: 'pack-quotes.js' }, async (s, m) => {
  await m.reply(`💬 #${60} ${ALL[(60-1) % ALL.length]}`);
});

