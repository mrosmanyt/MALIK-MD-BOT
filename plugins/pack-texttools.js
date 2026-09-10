/** Text transform tools */
import { cmd } from '../command.js';

function titleCase(s){return s.replace(/\w\S*/g,t=>t[0].toUpperCase()+t.slice(1).toLowerCase())}
function swapCase(s){return [...s].map(c=>c===c.toUpperCase()?c.toLowerCase():c.toUpperCase()).join('')}
function leet(s){return s.replace(/a/gi,'4').replace(/e/gi,'3').replace(/i/gi,'1').replace(/o/gi,'0').replace(/s/gi,'5').replace(/t/gi,'7')}

cmd({ pattern: 'upper|toUpperCase', desc: 'UPPERCASE', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .upper text');
  await m.reply(text.toUpperCase());
});

cmd({ pattern: 'lower|toLowerCase', desc: 'lowercase', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .lower text');
  await m.reply(text.toLowerCase());
});

cmd({ pattern: 'titlecase|title', desc: 'Title Case', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .titlecase text');
  await m.reply(titleCase(text));
});

cmd({ pattern: 'swapcase|swap', desc: 'sWaP cAsE', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .swapcase text');
  await m.reply(swapCase(text));
});

cmd({ pattern: 'addspaces|aspaces', desc: 'a d d   s p a c e s', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .spaces text');
  await m.reply([...text].join(' '));
});

cmd({ pattern: 'despaces|despace', desc: 'removespaces', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .despaces text');
  await m.reply(text.replace(/\s+/g,''));
});

cmd({ pattern: 'doublespace|dspace', desc: 'double  spaces', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .doublespace text');
  await m.reply(text.split(/\s+/).join('  '));
});

cmd({ pattern: 'underscore|uscore', desc: 'snake_case-ish', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .underscore text');
  await m.reply(text.trim().replace(/\s+/g,'_'));
});

cmd({ pattern: 'dashify|dash', desc: 'dash-ify', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .dashify text');
  await m.reply(text.trim().replace(/\s+/g,'-'));
});

cmd({ pattern: 'slashify|slash', desc: 'slash/ify', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .slashify text');
  await m.reply(text.trim().replace(/\s+/g,'/'));
});

cmd({ pattern: 'dotify|dots', desc: 'd.o.t.i.f.y', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .dotify text');
  await m.reply([...text.replace(/\s+/g,'')].join('.'));
});

cmd({ pattern: 'claptext|clap', desc: 'text 👏 with 👏 claps', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .claptext text');
  await m.reply(text.split(/\s+/).join(' 👏 '));
});

cmd({ pattern: 'sparkletext|spark', desc: '✨ sparkle ✨', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .sparkletext text');
  await m.reply('✨ '+text+' ✨');
});

cmd({ pattern: 'hearttext|hearts', desc: '❤️ hearts ❤️', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .hearttext text');
  await m.reply('❤️ '+text+' ❤️');
});

cmd({ pattern: 'firetext|fires', desc: '🔥 fire 🔥', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .firetext text');
  await m.reply('🔥 '+text+' 🔥');
});

cmd({ pattern: 'wavetext|waves', desc: 'wave letters', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .wavetext text');
  await m.reply([...text].map((c,i)=>i%2?c.toUpperCase():c.toLowerCase()).join(''));
});

cmd({ pattern: 'zalgoish|zalgo', desc: 'zalgo-lite', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .zalgoish text');
  await m.reply([...text].map(c=>c+'\u0300\u0301').join(''));
});

cmd({ pattern: 'leet|leet1337', desc: 'l33t speak', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .leet text');
  await m.reply(leet(text));
});

cmd({ pattern: 'binarytxt|bintxt', desc: 'binary text preview', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .binarytxt text');
  await m.reply([...text].map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ').slice(0,3500));
});

cmd({ pattern: 'hexify|hextxt', desc: 'hex encode preview', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .hexify text');
  await m.reply(Buffer.from(text).toString('hex'));
});

const STYLES = [["𝗮","𝗯","𝗰","𝗱","𝗲","𝗳","𝗴","𝗵","𝗶","𝗷","𝗸","𝗹","𝗺","𝗻","𝗼","𝗽","𝗾","𝗿","𝘀","𝘁","𝘂","𝘃","𝘄","𝘅","𝘆","𝘇"],["𝘢","𝘣","𝘤","𝘥","𝘦","𝘧","𝘨","𝘩","𝘪","𝘫","𝘬","𝘭","𝘮","𝘯","𝘰","𝘱","𝘲","𝘳","𝘴","𝘵","𝘶","𝘷","𝘸","𝘹","𝘺","𝘻"],["𝒶","𝒷","𝒸","𝒹","𝑒","𝒻","𝑔","𝒽","𝒾","𝒿","𝓀","𝓁","𝓂","𝓃","𝑜","𝓅","𝓆","𝓇","𝓈","𝓉","𝓊","𝓋","𝓌","𝓍","𝓎","𝓏"],["𝓪","𝓫","𝓬","𝓭","𝓮","𝓯","𝓰","𝓱","𝓲","𝓳","𝓴","𝓵","𝓶","𝓷","𝓸","𝓹","𝓺","𝓻","𝓼","𝓽","𝓾","𝓿","𝔀","𝔁","𝔂","𝔃"],["𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫"],["𝚊","𝚋","𝚌","𝚍","𝚎","𝚏","𝚐","𝚑","𝚒","𝚓","𝚔","𝚕","𝚖","𝚗","𝚘","𝚙","𝚚","𝚛","𝚜","𝚝","𝚞","𝚟","𝚠","𝚡","𝚢","𝚣"],["ⓐ","ⓑ","ⓒ","ⓓ","ⓔ","ⓕ","ⓖ","ⓗ","ⓘ","ⓙ","ⓚ","ⓛ","ⓜ","ⓝ","ⓞ","ⓟ","ⓠ","ⓡ","ⓢ","ⓣ","ⓤ","ⓥ","ⓦ","ⓧ","ⓨ","ⓩ"],["ᴀ","ʙ","ᴄ","ᴅ","ᴇ","ꜰ","ɢ","ʜ","ɪ","ᴊ","ᴋ","ʟ","ᴍ","ɴ","ᴏ","ᴘ","ǫ","ʀ","ꜱ","ᴛ","ᴜ","ᴠ","ᴡ","x","ʏ","ᴢ"]];
const BASE = 'abcdefghijklmnopqrstuvwxyz';
function applyStyle(text, map){return [...text].map(c=>{const i=BASE.indexOf(c.toLowerCase());return i>=0?(c===c.toUpperCase()?map[i].toUpperCase?.()||map[i]:map[i]):c}).join('')}

cmd({ pattern: 'style1|font1', desc: 'Fancy style #1', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style1 text');
  const map = STYLES[(1-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style2|font2', desc: 'Fancy style #2', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style2 text');
  const map = STYLES[(2-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style3|font3', desc: 'Fancy style #3', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style3 text');
  const map = STYLES[(3-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style4|font4', desc: 'Fancy style #4', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style4 text');
  const map = STYLES[(4-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style5|font5', desc: 'Fancy style #5', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style5 text');
  const map = STYLES[(5-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style6|font6', desc: 'Fancy style #6', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style6 text');
  const map = STYLES[(6-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style7|font7', desc: 'Fancy style #7', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style7 text');
  const map = STYLES[(7-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style8|font8', desc: 'Fancy style #8', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style8 text');
  const map = STYLES[(8-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style9|font9', desc: 'Fancy style #9', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style9 text');
  const map = STYLES[(9-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style10|font10', desc: 'Fancy style #10', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style10 text');
  const map = STYLES[(10-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style11|font11', desc: 'Fancy style #11', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style11 text');
  const map = STYLES[(11-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style12|font12', desc: 'Fancy style #12', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style12 text');
  const map = STYLES[(12-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style13|font13', desc: 'Fancy style #13', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style13 text');
  const map = STYLES[(13-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style14|font14', desc: 'Fancy style #14', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style14 text');
  const map = STYLES[(14-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style15|font15', desc: 'Fancy style #15', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style15 text');
  const map = STYLES[(15-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style16|font16', desc: 'Fancy style #16', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style16 text');
  const map = STYLES[(16-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style17|font17', desc: 'Fancy style #17', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style17 text');
  const map = STYLES[(17-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style18|font18', desc: 'Fancy style #18', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style18 text');
  const map = STYLES[(18-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style19|font19', desc: 'Fancy style #19', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style19 text');
  const map = STYLES[(19-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style20|font20', desc: 'Fancy style #20', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style20 text');
  const map = STYLES[(20-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style21|font21', desc: 'Fancy style #21', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style21 text');
  const map = STYLES[(21-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style22|font22', desc: 'Fancy style #22', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style22 text');
  const map = STYLES[(22-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style23|font23', desc: 'Fancy style #23', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style23 text');
  const map = STYLES[(23-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style24|font24', desc: 'Fancy style #24', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style24 text');
  const map = STYLES[(24-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style25|font25', desc: 'Fancy style #25', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style25 text');
  const map = STYLES[(25-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style26|font26', desc: 'Fancy style #26', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style26 text');
  const map = STYLES[(26-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style27|font27', desc: 'Fancy style #27', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style27 text');
  const map = STYLES[(27-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style28|font28', desc: 'Fancy style #28', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style28 text');
  const map = STYLES[(28-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style29|font29', desc: 'Fancy style #29', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style29 text');
  const map = STYLES[(29-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style30|font30', desc: 'Fancy style #30', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style30 text');
  const map = STYLES[(30-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style31|font31', desc: 'Fancy style #31', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style31 text');
  const map = STYLES[(31-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style32|font32', desc: 'Fancy style #32', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style32 text');
  const map = STYLES[(32-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style33|font33', desc: 'Fancy style #33', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style33 text');
  const map = STYLES[(33-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style34|font34', desc: 'Fancy style #34', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style34 text');
  const map = STYLES[(34-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style35|font35', desc: 'Fancy style #35', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style35 text');
  const map = STYLES[(35-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style36|font36', desc: 'Fancy style #36', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style36 text');
  const map = STYLES[(36-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style37|font37', desc: 'Fancy style #37', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style37 text');
  const map = STYLES[(37-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style38|font38', desc: 'Fancy style #38', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style38 text');
  const map = STYLES[(38-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style39|font39', desc: 'Fancy style #39', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style39 text');
  const map = STYLES[(39-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style40|font40', desc: 'Fancy style #40', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style40 text');
  const map = STYLES[(40-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style41|font41', desc: 'Fancy style #41', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style41 text');
  const map = STYLES[(41-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style42|font42', desc: 'Fancy style #42', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style42 text');
  const map = STYLES[(42-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style43|font43', desc: 'Fancy style #43', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style43 text');
  const map = STYLES[(43-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style44|font44', desc: 'Fancy style #44', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style44 text');
  const map = STYLES[(44-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style45|font45', desc: 'Fancy style #45', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style45 text');
  const map = STYLES[(45-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style46|font46', desc: 'Fancy style #46', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style46 text');
  const map = STYLES[(46-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style47|font47', desc: 'Fancy style #47', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style47 text');
  const map = STYLES[(47-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style48|font48', desc: 'Fancy style #48', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style48 text');
  const map = STYLES[(48-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style49|font49', desc: 'Fancy style #49', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style49 text');
  const map = STYLES[(49-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style50|font50', desc: 'Fancy style #50', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style50 text');
  const map = STYLES[(50-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style51|font51', desc: 'Fancy style #51', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style51 text');
  const map = STYLES[(51-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style52|font52', desc: 'Fancy style #52', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style52 text');
  const map = STYLES[(52-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style53|font53', desc: 'Fancy style #53', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style53 text');
  const map = STYLES[(53-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style54|font54', desc: 'Fancy style #54', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style54 text');
  const map = STYLES[(54-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style55|font55', desc: 'Fancy style #55', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style55 text');
  const map = STYLES[(55-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style56|font56', desc: 'Fancy style #56', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style56 text');
  const map = STYLES[(56-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style57|font57', desc: 'Fancy style #57', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style57 text');
  const map = STYLES[(57-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style58|font58', desc: 'Fancy style #58', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style58 text');
  const map = STYLES[(58-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style59|font59', desc: 'Fancy style #59', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style59 text');
  const map = STYLES[(59-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style60|font60', desc: 'Fancy style #60', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style60 text');
  const map = STYLES[(60-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style61|font61', desc: 'Fancy style #61', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style61 text');
  const map = STYLES[(61-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style62|font62', desc: 'Fancy style #62', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style62 text');
  const map = STYLES[(62-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style63|font63', desc: 'Fancy style #63', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style63 text');
  const map = STYLES[(63-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style64|font64', desc: 'Fancy style #64', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style64 text');
  const map = STYLES[(64-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style65|font65', desc: 'Fancy style #65', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style65 text');
  const map = STYLES[(65-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style66|font66', desc: 'Fancy style #66', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style66 text');
  const map = STYLES[(66-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style67|font67', desc: 'Fancy style #67', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style67 text');
  const map = STYLES[(67-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style68|font68', desc: 'Fancy style #68', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style68 text');
  const map = STYLES[(68-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style69|font69', desc: 'Fancy style #69', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style69 text');
  const map = STYLES[(69-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style70|font70', desc: 'Fancy style #70', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style70 text');
  const map = STYLES[(70-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style71|font71', desc: 'Fancy style #71', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style71 text');
  const map = STYLES[(71-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style72|font72', desc: 'Fancy style #72', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style72 text');
  const map = STYLES[(72-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style73|font73', desc: 'Fancy style #73', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style73 text');
  const map = STYLES[(73-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style74|font74', desc: 'Fancy style #74', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style74 text');
  const map = STYLES[(74-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style75|font75', desc: 'Fancy style #75', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style75 text');
  const map = STYLES[(75-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style76|font76', desc: 'Fancy style #76', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style76 text');
  const map = STYLES[(76-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style77|font77', desc: 'Fancy style #77', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style77 text');
  const map = STYLES[(77-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style78|font78', desc: 'Fancy style #78', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style78 text');
  const map = STYLES[(78-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style79|font79', desc: 'Fancy style #79', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style79 text');
  const map = STYLES[(79-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'style80|font80', desc: 'Fancy style #80', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .style80 text');
  const map = STYLES[(80-1) % STYLES.length];
  await m.reply(applyStyle(text, map));
});

cmd({ pattern: 'countchars1|cc1', desc: 'Count chars variant 1', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc1 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#1] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(1*n)%997}`);
});

cmd({ pattern: 'countchars2|cc2', desc: 'Count chars variant 2', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc2 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#2] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(2*n)%997}`);
});

cmd({ pattern: 'countchars3|cc3', desc: 'Count chars variant 3', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc3 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#3] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(3*n)%997}`);
});

cmd({ pattern: 'countchars4|cc4', desc: 'Count chars variant 4', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc4 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#4] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(4*n)%997}`);
});

cmd({ pattern: 'countchars5|cc5', desc: 'Count chars variant 5', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc5 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#5] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(5*n)%997}`);
});

cmd({ pattern: 'countchars6|cc6', desc: 'Count chars variant 6', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc6 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#6] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(6*n)%997}`);
});

cmd({ pattern: 'countchars7|cc7', desc: 'Count chars variant 7', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc7 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#7] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(7*n)%997}`);
});

cmd({ pattern: 'countchars8|cc8', desc: 'Count chars variant 8', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc8 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#8] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(8*n)%997}`);
});

cmd({ pattern: 'countchars9|cc9', desc: 'Count chars variant 9', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc9 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#9] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(9*n)%997}`);
});

cmd({ pattern: 'countchars10|cc10', desc: 'Count chars variant 10', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc10 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#10] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(10*n)%997}`);
});

cmd({ pattern: 'countchars11|cc11', desc: 'Count chars variant 11', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc11 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#11] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(11*n)%997}`);
});

cmd({ pattern: 'countchars12|cc12', desc: 'Count chars variant 12', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc12 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#12] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(12*n)%997}`);
});

cmd({ pattern: 'countchars13|cc13', desc: 'Count chars variant 13', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc13 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#13] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(13*n)%997}`);
});

cmd({ pattern: 'countchars14|cc14', desc: 'Count chars variant 14', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc14 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#14] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(14*n)%997}`);
});

cmd({ pattern: 'countchars15|cc15', desc: 'Count chars variant 15', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc15 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#15] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(15*n)%997}`);
});

cmd({ pattern: 'countchars16|cc16', desc: 'Count chars variant 16', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc16 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#16] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(16*n)%997}`);
});

cmd({ pattern: 'countchars17|cc17', desc: 'Count chars variant 17', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc17 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#17] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(17*n)%997}`);
});

cmd({ pattern: 'countchars18|cc18', desc: 'Count chars variant 18', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc18 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#18] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(18*n)%997}`);
});

cmd({ pattern: 'countchars19|cc19', desc: 'Count chars variant 19', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc19 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#19] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(19*n)%997}`);
});

cmd({ pattern: 'countchars20|cc20', desc: 'Count chars variant 20', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc20 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#20] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(20*n)%997}`);
});

cmd({ pattern: 'countchars21|cc21', desc: 'Count chars variant 21', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc21 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#21] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(21*n)%997}`);
});

cmd({ pattern: 'countchars22|cc22', desc: 'Count chars variant 22', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc22 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#22] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(22*n)%997}`);
});

cmd({ pattern: 'countchars23|cc23', desc: 'Count chars variant 23', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc23 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#23] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(23*n)%997}`);
});

cmd({ pattern: 'countchars24|cc24', desc: 'Count chars variant 24', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc24 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#24] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(24*n)%997}`);
});

cmd({ pattern: 'countchars25|cc25', desc: 'Count chars variant 25', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc25 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#25] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(25*n)%997}`);
});

cmd({ pattern: 'countchars26|cc26', desc: 'Count chars variant 26', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc26 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#26] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(26*n)%997}`);
});

cmd({ pattern: 'countchars27|cc27', desc: 'Count chars variant 27', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc27 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#27] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(27*n)%997}`);
});

cmd({ pattern: 'countchars28|cc28', desc: 'Count chars variant 28', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc28 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#28] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(28*n)%997}`);
});

cmd({ pattern: 'countchars29|cc29', desc: 'Count chars variant 29', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc29 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#29] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(29*n)%997}`);
});

cmd({ pattern: 'countchars30|cc30', desc: 'Count chars variant 30', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc30 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#30] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(30*n)%997}`);
});

cmd({ pattern: 'countchars31|cc31', desc: 'Count chars variant 31', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc31 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#31] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(31*n)%997}`);
});

cmd({ pattern: 'countchars32|cc32', desc: 'Count chars variant 32', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc32 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#32] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(32*n)%997}`);
});

cmd({ pattern: 'countchars33|cc33', desc: 'Count chars variant 33', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc33 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#33] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(33*n)%997}`);
});

cmd({ pattern: 'countchars34|cc34', desc: 'Count chars variant 34', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc34 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#34] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(34*n)%997}`);
});

cmd({ pattern: 'countchars35|cc35', desc: 'Count chars variant 35', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc35 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#35] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(35*n)%997}`);
});

cmd({ pattern: 'countchars36|cc36', desc: 'Count chars variant 36', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc36 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#36] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(36*n)%997}`);
});

cmd({ pattern: 'countchars37|cc37', desc: 'Count chars variant 37', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc37 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#37] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(37*n)%997}`);
});

cmd({ pattern: 'countchars38|cc38', desc: 'Count chars variant 38', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc38 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#38] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(38*n)%997}`);
});

cmd({ pattern: 'countchars39|cc39', desc: 'Count chars variant 39', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc39 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#39] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(39*n)%997}`);
});

cmd({ pattern: 'countchars40|cc40', desc: 'Count chars variant 40', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc40 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#40] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(40*n)%997}`);
});

cmd({ pattern: 'countchars41|cc41', desc: 'Count chars variant 41', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc41 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#41] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(41*n)%997}`);
});

cmd({ pattern: 'countchars42|cc42', desc: 'Count chars variant 42', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc42 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#42] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(42*n)%997}`);
});

cmd({ pattern: 'countchars43|cc43', desc: 'Count chars variant 43', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc43 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#43] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(43*n)%997}`);
});

cmd({ pattern: 'countchars44|cc44', desc: 'Count chars variant 44', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc44 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#44] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(44*n)%997}`);
});

cmd({ pattern: 'countchars45|cc45', desc: 'Count chars variant 45', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc45 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#45] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(45*n)%997}`);
});

cmd({ pattern: 'countchars46|cc46', desc: 'Count chars variant 46', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc46 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#46] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(46*n)%997}`);
});

cmd({ pattern: 'countchars47|cc47', desc: 'Count chars variant 47', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc47 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#47] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(47*n)%997}`);
});

cmd({ pattern: 'countchars48|cc48', desc: 'Count chars variant 48', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc48 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#48] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(48*n)%997}`);
});

cmd({ pattern: 'countchars49|cc49', desc: 'Count chars variant 49', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc49 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#49] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(49*n)%997}`);
});

cmd({ pattern: 'countchars50|cc50', desc: 'Count chars variant 50', category: 'tools', filename: 'pack-texttools.js' }, async (s, m, { text }) => {
  if (!text) return m.reply('Usage: .cc50 text');
  const n = [...text].length; const w = text.trim()?text.trim().split(/\s+/).length:0;
  await m.reply(`🔢 [#50] chars=${n} words=${w} bytes=${Buffer.byteLength(text)} seed=${(50*n)%997}`);
});

