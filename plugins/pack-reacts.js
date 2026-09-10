/** Reaction / interaction text commands */
import { cmd } from '../command.js';
import { pick } from '../lib/functions.js';

const lines = {
  "hug": ['did a hug','used hug energy','activated hug mode','sent a hug'],
  "kiss": ['did a kiss','used kiss energy','activated kiss mode','sent a kiss'],
  "pat": ['did a pat','used pat energy','activated pat mode','sent a pat'],
  "slap": ['did a slap','used slap energy','activated slap mode','sent a slap'],
  "punch": ['did a punch','used punch energy','activated punch mode','sent a punch'],
  "kick": ['did a kick','used kick energy','activated kick mode','sent a kick'],
  "bite": ['did a bite','used bite energy','activated bite mode','sent a bite'],
  "lick": ['did a lick','used lick energy','activated lick mode','sent a lick'],
  "cuddle": ['did a cuddle','used cuddle energy','activated cuddle mode','sent a cuddle'],
  "poke": ['did a poke','used poke energy','activated poke mode','sent a poke'],
  "wave": ['did a wave','used wave energy','activated wave mode','sent a wave'],
  "wink": ['did a wink','used wink energy','activated wink mode','sent a wink'],
  "blush": ['did a blush','used blush energy','activated blush mode','sent a blush'],
  "cry": ['did a cry','used cry energy','activated cry mode','sent a cry'],
  "smile": ['did a smile','used smile energy','activated smile mode','sent a smile'],
  "laugh": ['did a laugh','used laugh energy','activated laugh mode','sent a laugh'],
  "dance": ['did a dance','used dance energy','activated dance mode','sent a dance'],
  "yeet": ['did a yeet','used yeet energy','activated yeet mode','sent a yeet'],
  "bonk": ['did a bonk','used bonk energy','activated bonk mode','sent a bonk'],
  "highfive": ['did a highfive','used highfive energy','activated highfive mode','sent a highfive'],
  "handhold": ['did a handhold','used handhold energy','activated handhold mode','sent a handhold'],
  "glomp": ['did a glomp','used glomp energy','activated glomp mode','sent a glomp'],
  "nom": ['did a nom','used nom energy','activated nom mode','sent a nom'],
  "smug": ['did a smug','used smug energy','activated smug mode','sent a smug'],
  "cringe": ['did a cringe','used cringe energy','activated cringe mode','sent a cringe'],
  "kill": ['did a kill','used kill energy','activated kill mode','sent a kill'],
  "happy": ['did a happy','used happy energy','activated happy mode','sent a happy'],
  "bully": ['did a bully','used bully energy','activated bully mode','sent a bully'],
  "tickle": ['did a tickle','used tickle energy','activated tickle mode','sent a tickle'],
  "stare": ['did a stare','used stare energy','activated stare mode','sent a stare'],
  "feed": ['did a feed','used feed energy','activated feed mode','sent a feed'],
  "spank": ['did a spank','used spank energy','activated spank mode','sent a spank'],
  "shoot": ['did a shoot','used shoot energy','activated shoot mode','sent a shoot'],
  "stab": ['did a stab','used stab energy','activated stab mode','sent a stab'],
  "throw": ['did a throw','used throw energy','activated throw mode','sent a throw'],
  "catch": ['did a catch','used catch energy','activated catch mode','sent a catch'],
  "push": ['did a push','used push energy','activated push mode','sent a push'],
  "pull": ['did a pull','used pull energy','activated pull mode','sent a pull'],
  "carry": ['did a carry','used carry energy','activated carry mode','sent a carry'],
  "lift": ['did a lift','used lift energy','activated lift mode','sent a lift'],
  "bow": ['did a bow','used bow energy','activated bow mode','sent a bow'],
  "salute": ['did a salute','used salute energy','activated salute mode','sent a salute'],
  "clap": ['did a clap','used clap energy','activated clap mode','sent a clap'],
  "cheer": ['did a cheer','used cheer energy','activated cheer mode','sent a cheer'],
  "boop": ['did a boop','used boop energy','activated boop mode','sent a boop'],
  "nuzzle": ['did a nuzzle','used nuzzle energy','activated nuzzle mode','sent a nuzzle'],
  "snuggle": ['did a snuggle','used snuggle energy','activated snuggle mode','sent a snuggle'],
  "tackle": ['did a tackle','used tackle energy','activated tackle mode','sent a tackle'],
  "headpat": ['did a headpat','used headpat energy','activated headpat mode','sent a headpat'],
  "fistbump": ['did a fistbump','used fistbump energy','activated fistbump mode','sent a fistbump'],
  "shrug": ['did a shrug','used shrug energy','activated shrug mode','sent a shrug'],
  "facepalm": ['did a facepalm','used facepalm energy','activated facepalm mode','sent a facepalm'],
  "eyeroll": ['did a eyeroll','used eyeroll energy','activated eyeroll mode','sent a eyeroll'],
  "nod": ['did a nod','used nod energy','activated nod mode','sent a nod'],
  "shake": ['did a shake','used shake energy','activated shake mode','sent a shake'],
  "point": ['did a point','used point energy','activated point mode','sent a point'],
  "flex": ['did a flex','used flex energy','activated flex mode','sent a flex'],
  "dab": ['did a dab','used dab energy','activated dab mode','sent a dab'],
  "floss": ['did a floss','used floss energy','activated floss mode','sent a floss'],
  "tpose": ['did a tpose','used tpose energy','activated tpose mode','sent a tpose'],
  "cryhug": ['did a cryhug','used cryhug energy','activated cryhug mode','sent a cryhug'],
  "comfort": ['did a comfort','used comfort energy','activated comfort mode','sent a comfort'],
  "protect": ['did a protect','used protect energy','activated protect mode','sent a protect'],
  "defend": ['did a defend','used defend energy','activated defend mode','sent a defend'],
  "rescue": ['did a rescue','used rescue energy','activated rescue mode','sent a rescue'],
  "heal": ['did a heal','used heal energy','activated heal mode','sent a heal'],
  "revive": ['did a revive','used revive energy','activated revive mode','sent a revive'],
  "buff": ['did a buff','used buff energy','activated buff mode','sent a buff'],
  "nerf": ['did a nerf','used nerf energy','activated nerf mode','sent a nerf'],
  "powerup": ['did a powerup','used powerup energy','activated powerup mode','sent a powerup'],
  "scare": ['did a scare','used scare energy','activated scare mode','sent a scare'],
  "spook": ['did a spook','used spook energy','activated spook mode','sent a spook'],
  "haunt": ['did a haunt','used haunt energy','activated haunt mode','sent a haunt'],
  "curse": ['did a curse','used curse energy','activated curse mode','sent a curse'],
  "bless": ['did a bless','used bless energy','activated bless mode','sent a bless'],
  "prayreact": ['did a prayreact','used prayreact energy','activated prayreact mode','sent a prayreact'],
  "amen": ['did a amen','used amen energy','activated amen mode','sent a amen'],
  "salamreact": ['did a salamreact','used salamreact energy','activated salamreact mode','sent a salamreact'],
  "handshake": ['did a handshake','used handshake energy','activated handshake mode','sent a handshake'],
  "peace": ['did a peace','used peace energy','activated peace mode','sent a peace'],
  "lovebomb": ['did a lovebomb','used lovebomb energy','activated lovebomb mode','sent a lovebomb'],
  "heartreact": ['did a heartreact','used heartreact energy','activated heartreact mode','sent a heartreact'],
  "rose": ['did a rose','used rose energy','activated rose mode','sent a rose'],
  "gift": ['did a gift','used gift energy','activated gift mode','sent a gift'],
  "cakeemoji": ['did a cakeemoji','used cakeemoji energy','activated cakeemoji mode','sent a cakeemoji'],
  "party": ['did a party','used party energy','activated party mode','sent a party'],
  "confetti": ['did a confetti','used confetti energy','activated confetti mode','sent a confetti'],
  "fireworks": ['did a fireworks','used fireworks energy','activated fireworks mode','sent a fireworks'],
  "sparkle": ['did a sparkle','used sparkle energy','activated sparkle mode','sent a sparkle'],
  "shine": ['did a shine','used shine energy','activated shine mode','sent a shine'],
  "sleep": ['did a sleep','used sleep energy','activated sleep mode','sent a sleep'],
  "wake": ['did a wake','used wake energy','activated wake mode','sent a wake'],
  "yawn": ['did a yawn','used yawn energy','activated yawn mode','sent a yawn'],
  "stretch": ['did a stretch','used stretch energy','activated stretch mode','sent a stretch'],
  "run": ['did a run','used run energy','activated run mode','sent a run'],
  "walk": ['did a walk','used walk energy','activated walk mode','sent a walk'],
  "fly": ['did a fly','used fly energy','activated fly mode','sent a fly'],
  "swim": ['did a swim','used swim energy','activated swim mode','sent a swim'],
  "climb": ['did a climb','used climb energy','activated climb mode','sent a climb'],
  "jump": ['did a jump','used jump energy','activated jump mode','sent a jump'],
  "cook": ['did a cook','used cook energy','activated cook mode','sent a cook'],
  "eat": ['did a eat','used eat energy','activated eat mode','sent a eat'],
  "drink": ['did a drink','used drink energy','activated drink mode','sent a drink'],
  "sip": ['did a sip','used sip energy','activated sip mode','sent a sip'],
  "toast": ['did a toast','used toast energy','activated toast mode','sent a toast'],
  "cheers": ['did a cheers','used cheers energy','activated cheers mode','sent a cheers'],
  "bake": ['did a bake','used bake energy','activated bake mode','sent a bake'],
  "grill": ['did a grill','used grill energy','activated grill mode','sent a grill'],
  "serve": ['did a serve','used serve energy','activated serve mode','sent a serve'],
  "share": ['did a share','used share energy','activated share mode','sent a share'],
  "code": ['did a code','used code energy','activated code mode','sent a code'],
  "debug": ['did a debug','used debug energy','activated debug mode','sent a debug'],
  "deploy": ['did a deploy','used deploy energy','activated deploy mode','sent a deploy'],
  "commit": ['did a commit','used commit energy','activated commit mode','sent a commit'],
  "merge": ['did a merge','used merge energy','activated merge mode','sent a merge'],
  "rebase": ['did a rebase','used rebase energy','activated rebase mode','sent a rebase'],
  "shipit": ['did a shipit','used shipit energy','activated shipit mode','sent a shipit'],
  "hotfix": ['did a hotfix','used hotfix energy','activated hotfix mode','sent a hotfix'],
  "refactor": ['did a refactor','used refactor energy','activated refactor mode','sent a refactor'],
  "document": ['did a document','used document energy','activated document mode','sent a document'],
};

cmd({ pattern: 'hugme|hugreact', desc: 'hug reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["hug"]);
  await s.sendMessage(m.chat, { text: `🤗 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'kissme|kissreact', desc: 'kiss reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["kiss"]);
  await s.sendMessage(m.chat, { text: `💋 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'patme|patreact', desc: 'pat reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["pat"]);
  await s.sendMessage(m.chat, { text: `👋 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'slapme|slapreact', desc: 'slap reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["slap"]);
  await s.sendMessage(m.chat, { text: `😤 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'punchme|punchreact', desc: 'punch reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["punch"]);
  await s.sendMessage(m.chat, { text: `👊 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'kickme|kickreact', desc: 'kick reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["kick"]);
  await s.sendMessage(m.chat, { text: `🦵 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'biteme|bitereact', desc: 'bite reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["bite"]);
  await s.sendMessage(m.chat, { text: `😬 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'lickme|lickreact', desc: 'lick reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["lick"]);
  await s.sendMessage(m.chat, { text: `😛 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'cuddleme|cuddlereact', desc: 'cuddle reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["cuddle"]);
  await s.sendMessage(m.chat, { text: `🥰 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'pokeme|pokereact', desc: 'poke reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["poke"]);
  await s.sendMessage(m.chat, { text: `👉 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'waveme|wavereact', desc: 'wave reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["wave"]);
  await s.sendMessage(m.chat, { text: `👋 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'winkme|winkreact', desc: 'wink reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["wink"]);
  await s.sendMessage(m.chat, { text: `😉 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'blushme|blushreact', desc: 'blush reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["blush"]);
  await s.sendMessage(m.chat, { text: `😊 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'cryme|cryreact', desc: 'cry reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["cry"]);
  await s.sendMessage(m.chat, { text: `😢 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'smileme|smilereact', desc: 'smile reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["smile"]);
  await s.sendMessage(m.chat, { text: `😄 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'laughme|laughreact', desc: 'laugh reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["laugh"]);
  await s.sendMessage(m.chat, { text: `😂 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'danceme|dancereact', desc: 'dance reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["dance"]);
  await s.sendMessage(m.chat, { text: `💃 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'yeetme|yeetreact', desc: 'yeet reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["yeet"]);
  await s.sendMessage(m.chat, { text: `🚀 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'bonkme|bonkreact', desc: 'bonk reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["bonk"]);
  await s.sendMessage(m.chat, { text: `🔨 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'highfiveme|highfivereact', desc: 'highfive reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["highfive"]);
  await s.sendMessage(m.chat, { text: `🙌 @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'handholdme|handholdreact', desc: 'handhold reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["handhold"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'glompme|glompreact', desc: 'glomp reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["glomp"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'nomme|nomreact', desc: 'nom reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["nom"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'smugme|smugreact', desc: 'smug reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["smug"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'cringeme|cringereact', desc: 'cringe reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["cringe"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'killme|killreact', desc: 'kill reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["kill"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'happyme|happyreact', desc: 'happy reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["happy"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'bullyme|bullyreact', desc: 'bully reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["bully"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'tickleme|ticklereact', desc: 'tickle reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["tickle"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'stareme|starereact', desc: 'stare reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["stare"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'feedme|feedreact', desc: 'feed reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["feed"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'spankme|spankreact', desc: 'spank reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["spank"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'shootme|shootreact', desc: 'shoot reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["shoot"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'stabme|stabreact', desc: 'stab reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["stab"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'throwme|throwreact', desc: 'throw reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["throw"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'catchme|catchreact', desc: 'catch reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["catch"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'pushme|pushreact', desc: 'push reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["push"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'pullme|pullreact', desc: 'pull reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["pull"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'carryme|carryreact', desc: 'carry reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["carry"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'liftme|liftreact', desc: 'lift reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["lift"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'bowme|bowreact', desc: 'bow reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["bow"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'saluteme|salutereact', desc: 'salute reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["salute"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'clapme|clapreact', desc: 'clap reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["clap"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'cheerme|cheerreact', desc: 'cheer reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["cheer"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'boopme|boopreact', desc: 'boop reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["boop"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'nuzzleme|nuzzlereact', desc: 'nuzzle reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["nuzzle"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'snuggleme|snugglereact', desc: 'snuggle reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["snuggle"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'tackleme|tacklereact', desc: 'tackle reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["tackle"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'headpatme|headpatreact', desc: 'headpat reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["headpat"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'fistbumpme|fistbumpreact', desc: 'fistbump reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["fistbump"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'shrugme|shrugreact', desc: 'shrug reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["shrug"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'facepalmme|facepalmreact', desc: 'facepalm reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["facepalm"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'eyerollme|eyerollreact', desc: 'eyeroll reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["eyeroll"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'nodme|nodreact', desc: 'nod reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["nod"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'shakeme|shakereact', desc: 'shake reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["shake"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'pointme|pointreact', desc: 'point reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["point"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'flexme|flexreact', desc: 'flex reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["flex"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'dabme|dabreact', desc: 'dab reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["dab"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'flossme|flossreact', desc: 'floss reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["floss"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'tposeme|tposereact', desc: 'tpose reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["tpose"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'cryhugme|cryhugreact', desc: 'cryhug reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["cryhug"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'comfortme|comfortreact', desc: 'comfort reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["comfort"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'protectme|protectreact', desc: 'protect reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["protect"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'defendme|defendreact', desc: 'defend reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["defend"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'rescueme|rescuereact', desc: 'rescue reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["rescue"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'healme|healreact', desc: 'heal reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["heal"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'reviveme|revivereact', desc: 'revive reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["revive"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'buffme|buffreact', desc: 'buff reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["buff"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'nerfme|nerfreact', desc: 'nerf reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["nerf"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'powerupme|powerupreact', desc: 'powerup reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["powerup"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'scareme|scarereact', desc: 'scare reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["scare"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'spookme|spookreact', desc: 'spook reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["spook"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'hauntme|hauntreact', desc: 'haunt reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["haunt"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'curseme|cursereact', desc: 'curse reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["curse"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'blessme|blessreact', desc: 'bless reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["bless"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'prayreactme|prayreactreact', desc: 'prayreact reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["prayreact"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'amenme|amenreact', desc: 'amen reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["amen"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'salamreactme|salamreactreact', desc: 'salamreact reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["salamreact"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'handshakeme|handshakereact', desc: 'handshake reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["handshake"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'peaceme|peacereact', desc: 'peace reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["peace"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'lovebombme|lovebombreact', desc: 'lovebomb reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["lovebomb"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'heartreactme|heartreactreact', desc: 'heartreact reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["heartreact"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'roseme|rosereact', desc: 'rose reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["rose"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'giftme|giftreact', desc: 'gift reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["gift"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'cakeemojime|cakeemojireact', desc: 'cakeemoji reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["cakeemoji"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'partyme|partyreact', desc: 'party reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["party"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'confettime|confettireact', desc: 'confetti reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["confetti"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'fireworksme|fireworksreact', desc: 'fireworks reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["fireworks"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'sparkleme|sparklereact', desc: 'sparkle reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["sparkle"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'shineme|shinereact', desc: 'shine reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["shine"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'sleepme|sleepreact', desc: 'sleep reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["sleep"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'wakeme|wakereact', desc: 'wake reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["wake"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'yawnme|yawnreact', desc: 'yawn reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["yawn"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'stretchme|stretchreact', desc: 'stretch reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["stretch"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'runme|runreact', desc: 'run reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["run"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'walkme|walkreact', desc: 'walk reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["walk"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'flyme|flyreact', desc: 'fly reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["fly"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'swimme|swimreact', desc: 'swim reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["swim"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'climbme|climbreact', desc: 'climb reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["climb"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'jumpme|jumpreact', desc: 'jump reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["jump"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'cookme|cookreact', desc: 'cook reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["cook"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'eatme|eatreact', desc: 'eat reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["eat"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'drinkme|drinkreact', desc: 'drink reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["drink"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'sipme|sipreact', desc: 'sip reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["sip"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'toastme|toastreact', desc: 'toast reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["toast"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'cheersme|cheersreact', desc: 'cheers reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["cheers"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'bakeme|bakereact', desc: 'bake reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["bake"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'grillme|grillreact', desc: 'grill reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["grill"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'serveme|servereact', desc: 'serve reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["serve"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'shareme|sharereact', desc: 'share reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["share"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'codeme|codereact', desc: 'code reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["code"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'debugme|debugreact', desc: 'debug reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["debug"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'deployme|deployreact', desc: 'deploy reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["deploy"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'commitme|commitreact', desc: 'commit reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["commit"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'mergeme|mergereact', desc: 'merge reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["merge"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'rebaseme|rebasereact', desc: 'rebase reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["rebase"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'shipitme|shipitreact', desc: 'shipit reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["shipit"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'hotfixme|hotfixreact', desc: 'hotfix reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["hotfix"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'refactorme|refactorreact', desc: 'refactor reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["refactor"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

cmd({ pattern: 'documentme|documentreact', desc: 'document reaction', category: 'fun', filename: 'pack-reacts.js' }, async (s, m) => {
  const jid = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  const act = pick(lines["document"]);
  await s.sendMessage(m.chat, { text: `✨ @${m.senderNum} ${act} on @${jid.split('@')[0]}`, mentions: [m.sender, jid] }, { quoted: m });
});

