/** Bulk fun meter commands — real random score handlers */
import { cmd } from '../command.js';

cmd({ pattern: 'coolrate|coolmeter', desc: 'cool meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *cool* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'hotrate|hotmeter', desc: 'hot meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *hot* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'richrate|richmeter', desc: 'rich meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *rich* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'poorrate|poormeter', desc: 'poor meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *poor* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'smartrate|smartmeter', desc: 'smart meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *smart* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'dumbrate|dumbmeter', desc: 'dumb meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *dumb* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'crazyrate|crazymeter', desc: 'crazy meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *crazy* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'lazyrate|lazymeter', desc: 'lazy meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *lazy* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'braverate|bravemeter', desc: 'brave meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *brave* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'scaredrate|scaredmeter', desc: 'scared meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *scared* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'funnyrate|funnymeter', desc: 'funny meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *funny* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'boringrate|boringmeter', desc: 'boring meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *boring* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'kindrate|kindmeter', desc: 'kind meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *kind* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'ruderate|rudemeter', desc: 'rude meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *rude* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'luckyrate|luckymeter', desc: 'lucky meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *lucky* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'unluckyrate|unluckymeter', desc: 'unlucky meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *unlucky* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'strongrate|strongmeter', desc: 'strong meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *strong* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'weakrate|weakmeter', desc: 'weak meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *weak* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'fastrate|fastmeter', desc: 'fast meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *fast* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'slowrate|slowmeter', desc: 'slow meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *slow* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'cuterate|cutemeter', desc: 'cute meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *cute* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'uglyrate|uglymeter', desc: 'ugly meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *ugly* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'freshrate|freshmeter', desc: 'fresh meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *fresh* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'cringerate|cringemeter', desc: 'cringe meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *cringe* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'sigmarate|sigmameter', desc: 'sigma meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *sigma* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'rizzrate|rizzmeter', desc: 'rizz meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *rizz* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'aurarate|aurameter', desc: 'aura meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *aura* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'driprate|dripmeter', desc: 'drip meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *drip* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'flexrate|flexmeter', desc: 'flex meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *flex* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'clownrate|clownmeter', desc: 'clown meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *clown* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'nerdrate|nerdmeter', desc: 'nerd meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *nerd* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'geekrate|geekmeter', desc: 'geek meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *geek* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'chadrate|chadmeter', desc: 'chad meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *chad* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'simprate|simpmeter', desc: 'simp meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *simp* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'loyalrate|loyalmeter', desc: 'loyal meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *loyal* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'toxicrate|toxicmeter', desc: 'toxic meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *toxic* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'peacefulrate|peacefulmeter', desc: 'peaceful meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *peaceful* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'angryrate|angrymeter', desc: 'angry meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *angry* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'happyrate|happymeter', desc: 'happy meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *happy* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'sadrate|sadmeter', desc: 'sad meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *sad* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'legendaryrate|legendarymeter', desc: 'legendary meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *legendary* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'epicrate|epicmeter', desc: 'epic meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *epic* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'rarerate|raremeter', desc: 'rare meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *rare* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'commonrate|commonmeter', desc: 'common meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *common* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'mvprate|mvpmeter', desc: 'mvp meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *mvp* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'npcrate|npcmeter', desc: 'npc meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *npc* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'bossrate|bossmeter', desc: 'boss meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *boss* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'noobrate|noobmeter', desc: 'noob meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *noob* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'prorate|prometer', desc: 'pro meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *pro* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'goatrate|goatmeter', desc: 'goat meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *goat* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'susrate|susmeter', desc: 'sus meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *sus* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'imposterrate|impostermeter', desc: 'imposter meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *imposter* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'angelrate|angelmeter', desc: 'angel meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *angel* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'devilrate|devilmeter', desc: 'devil meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *devil* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'herorate|herometer', desc: 'hero meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *hero* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'villainrate|villainmeter', desc: 'villain meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *villain* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'kingrate|kingmeter', desc: 'king meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *king* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'queenrate|queenmeter', desc: 'queen meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *queen* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'princerate|princemeter', desc: 'prince meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *prince* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'princessrate|princessmeter', desc: 'princess meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *princess* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'wizardrate|wizardmeter', desc: 'wizard meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *wizard* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'knightrate|knightmeter', desc: 'knight meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *knight* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'piraterate|piratemeter', desc: 'pirate meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *pirate* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'ninjarate|ninjameter', desc: 'ninja meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *ninja* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'samurairate|samuraimeter', desc: 'samurai meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *samurai* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'vikingrate|vikingmeter', desc: 'viking meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *viking* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'alienrate|alienmeter', desc: 'alien meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *alien* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'robotrate|robotmeter', desc: 'robot meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *robot* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'zombierate|zombiemeter', desc: 'zombie meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *zombie* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'ghostrate|ghostmeter', desc: 'ghost meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *ghost* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'catrate|catmeter', desc: 'cat meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *cat* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'dograte|dogmeter', desc: 'dog meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *dog* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'foxrate|foxmeter', desc: 'fox meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *fox* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'wolfrate|wolfmeter', desc: 'wolf meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *wolf* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'lionrate|lionmeter', desc: 'lion meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *lion* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'tigerrate|tigermeter', desc: 'tiger meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *tiger* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'bearrate|bearmeter', desc: 'bear meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *bear* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'pandarate|pandameter', desc: 'panda meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *panda* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'dragonrate|dragonmeter', desc: 'dragon meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *dragon* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'phoenixrate|phoenixmeter', desc: 'phoenix meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *phoenix* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'coffeerate|coffeemeter', desc: 'coffee meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *coffee* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'tearate|teameter', desc: 'tea meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *tea* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'pizzarate|pizzameter', desc: 'pizza meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *pizza* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'burgerrate|burgermeter', desc: 'burger meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *burger* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'sushirate|sushimeter', desc: 'sushi meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *sushi* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'tacorate|tacometer', desc: 'taco meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *taco* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'cakerate|cakemeter', desc: 'cake meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *cake* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'cookierate|cookiemeter', desc: 'cookie meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *cookie* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'chocolaterate|chocolatemeter', desc: 'chocolate meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *chocolate* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'spicyrate|spicymeter', desc: 'spicy meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *spicy* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'gamerrate|gamermeter', desc: 'gamer meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *gamer* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'streamerrate|streamermeter', desc: 'streamer meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *streamer* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'rapperrate|rappermeter', desc: 'rapper meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *rapper* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'singerrate|singermeter', desc: 'singer meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *singer* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'dancerrate|dancermeter', desc: 'dancer meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *dancer* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'artistrate|artistmeter', desc: 'artist meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *artist* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'coderrate|codermeter', desc: 'coder meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *coder* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'hackerrate|hackermeter', desc: 'hacker meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *hacker* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'teacherrate|teachermeter', desc: 'teacher meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *teacher* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'studentrate|studentmeter', desc: 'student meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *student* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'muslimrate|muslimmeter', desc: 'muslim meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *muslim* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'prayerrate|prayermeter', desc: 'prayer meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *prayer* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'imanrate|imanmeter', desc: 'iman meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *iman* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'adabrate|adabmeter', desc: 'adab meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *adab* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'akhlakrate|akhlakmeter', desc: 'akhlak meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *akhlak* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'sabrrate|sabrmeter', desc: 'sabr meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *sabr* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'shukrrate|shukrmeter', desc: 'shukr meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *shukr* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'taqwarate|taqwameter', desc: 'taqwa meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *taqwa* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'ihsanrate|ihsanmeter', desc: 'ihsan meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *ihsan* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'ikhlasrate|ikhlasmeter', desc: 'ikhlas meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *ikhlas* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'pakistanirate|pakistanimeter', desc: 'pakistani meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *pakistani* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'desirate|desimeter', desc: 'desi meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *desi* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'karachirate|karachimeter', desc: 'karachi meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *karachi* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'lahorerate|lahoremeter', desc: 'lahore meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *lahore* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'islamabadrate|islamabadmeter', desc: 'islamabad meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *islamabad* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'multanrate|multanmeter', desc: 'multan meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *multan* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'peshawarrate|peshawarmeter', desc: 'peshawar meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *peshawar* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'quettarate|quettameter', desc: 'quetta meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *quetta* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'faisalabadrate|faisalabadmeter', desc: 'faisalabad meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *faisalabad* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'sialkotrate|sialkotmeter', desc: 'sialkot meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *sialkot* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'cricketrate|cricketmeter', desc: 'cricket meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *cricket* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'footballrate|footballmeter', desc: 'football meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *football* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'hockeyrate|hockeymeter', desc: 'hockey meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *hockey* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'tennisrate|tennismeter', desc: 'tennis meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *tennis* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'boxingrate|boxingmeter', desc: 'boxing meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *boxing* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'wrestlingrate|wrestlingmeter', desc: 'wrestling meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *wrestling* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'gymrate|gymmeter', desc: 'gym meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *gym* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'yogarate|yogameter', desc: 'yoga meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *yoga* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'runnerrate|runnermeter', desc: 'runner meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *runner* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'swimmerrate|swimmermeter', desc: 'swimmer meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *swimmer* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'instagramrate|instagrammeter', desc: 'instagram meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *instagram* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'tiktokrate|tiktokmeter', desc: 'tiktok meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *tiktok* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'youtuberate|youtubemeter', desc: 'youtube meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *youtube* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'snapchatrate|snapchatmeter', desc: 'snapchat meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *snapchat* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'whatsapprate|whatsappmeter', desc: 'whatsapp meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *whatsapp* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'discordrate|discordmeter', desc: 'discord meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *discord* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'redditrate|redditmeter', desc: 'reddit meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *reddit* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'twitterrate|twittermeter', desc: 'twitter meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *twitter* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'facebookrate|facebookmeter', desc: 'facebook meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *facebook* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'linkedinrate|linkedinmeter', desc: 'linkedin meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *linkedin* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'mondayrate|mondaymeter', desc: 'monday meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *monday* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'tuesdayrate|tuesdaymeter', desc: 'tuesday meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *tuesday* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'wednesdayrate|wednesdaymeter', desc: 'wednesday meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *wednesday* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'thursdayrate|thursdaymeter', desc: 'thursday meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *thursday* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'fridayrate|fridaymeter', desc: 'friday meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *friday* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'saturdayrate|saturdaymeter', desc: 'saturday meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *saturday* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'sundayrate|sundaymeter', desc: 'sunday meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *sunday* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'morningrate|morningmeter', desc: 'morning meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *morning* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'nightrate|nightmeter', desc: 'night meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *night* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'weekendrate|weekendmeter', desc: 'weekend meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *weekend* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'summerrate|summermeter', desc: 'summer meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *summer* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'winterrate|wintermeter', desc: 'winter meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *winter* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'springrate|springmeter', desc: 'spring meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *spring* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'autumnrate|autumnmeter', desc: 'autumn meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *autumn* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'rainrate|rainmeter', desc: 'rain meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *rain* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'snowrate|snowmeter', desc: 'snow meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *snow* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'sunrate|sunmeter', desc: 'sun meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *sun* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'moonrate|moonmeter', desc: 'moon meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *moon* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'starrate|starmeter', desc: 'star meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *star* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'cloudrate|cloudmeter', desc: 'cloud meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *cloud* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'redrate|redmeter', desc: 'red meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *red* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'bluerate|bluemeter', desc: 'blue meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *blue* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'greenrate|greenmeter', desc: 'green meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *green* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'yellowrate|yellowmeter', desc: 'yellow meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *yellow* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'purplerate|purplemeter', desc: 'purple meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *purple* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'pinkrate|pinkmeter', desc: 'pink meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *pink* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'orangerate|orangemeter', desc: 'orange meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *orange* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'blackrate|blackmeter', desc: 'black meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *black* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'whiterate|whitemeter', desc: 'white meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *white* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'goldrate|goldmeter', desc: 'gold meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *gold* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'phonerate|phonemeter', desc: 'phone meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *phone* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'laptoprate|laptopmeter', desc: 'laptop meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *laptop* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'wifirate|wifimeter', desc: 'wifi meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *wifi* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'batteryrate|batterymeter', desc: 'battery meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *battery* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'camerarate|camerameter', desc: 'camera meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *camera* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'musicrate|musicmeter', desc: 'music meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *music* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'movierate|moviemeter', desc: 'movie meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *movie* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'animerate|animemeter', desc: 'anime meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *anime* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'mangarate|mangameter', desc: 'manga meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *manga* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'comicrate|comicmeter', desc: 'comic meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *comic* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'loverate|lovepct', desc: 'love meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *love* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'haterate|hatemeter', desc: 'hate meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *hate* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'friendrate|friendmeter', desc: 'friend meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *friend* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'enemyrate|enemymeter', desc: 'enemy meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *enemy* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'crushrate|crushmeter', desc: 'crush meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *crush* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'couplerate|couplemeter', desc: 'couple meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *couple* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'singlerate|singlemeter', desc: 'single meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *single* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'marriedrate|marriedmeter', desc: 'married meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *married* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'familyrate|familymeter', desc: 'family meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *family* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'homerate|homemeter', desc: 'home meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *home* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'moneyrate|moneymeter', desc: 'money meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *money* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'cryptorate|cryptometer', desc: 'crypto meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *crypto* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'bitcoinrate|bitcoinmeter', desc: 'bitcoin meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *bitcoin* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'stockrate|stockmeter', desc: 'stock meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *stock* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'businessrate|businessmeter', desc: 'business meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *business* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'startuprate|startupmeter', desc: 'startup meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *startup* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'bossenergyrate|bossenergymeter', desc: 'bossenergy meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *bossenergy* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'hustlerate|hustlemeter', desc: 'hustle meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *hustle* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'grindrate|grindmeter', desc: 'grind meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *grind* meter for *${who}*: *${score}/100*`);
});

cmd({ pattern: 'chillrate|chillmeter', desc: 'chill meter 0-100', category: 'fun', filename: 'pack-meters.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  const score = Math.floor(Math.random() * 101);
  await m.reply(`📊 *chill* meter for *${who}*: *${score}/100*`);
});

