/** Unit / number converters */
import { cmd } from '../command.js';

cmd({ pattern: 'c2f', desc: 'Convert C→F', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .c2f number');
  const out=(n)*9/5+32;
  await m.reply(`📐 C→F: ${n} → *${out.toFixed(4)}* °F`);
});

cmd({ pattern: 'f2c', desc: 'Convert F→C', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .f2c number');
  const out=((n)-32)*5/9;
  await m.reply(`📐 F→C: ${n} → *${out.toFixed(4)}* °C`);
});

cmd({ pattern: 'km2mi', desc: 'Convert km→mi', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .km2mi number');
  const out=(n)*0.621371;
  await m.reply(`📐 km→mi: ${n} → *${out.toFixed(4)}* mi`);
});

cmd({ pattern: 'mi2km', desc: 'Convert mi→km', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .mi2km number');
  const out=(n)*1.60934;
  await m.reply(`📐 mi→km: ${n} → *${out.toFixed(4)}* km`);
});

cmd({ pattern: 'kg2lb', desc: 'Convert kg→lb', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .kg2lb number');
  const out=(n)*2.20462;
  await m.reply(`📐 kg→lb: ${n} → *${out.toFixed(4)}* lb`);
});

cmd({ pattern: 'lb2kg', desc: 'Convert lb→kg', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .lb2kg number');
  const out=(n)*0.453592;
  await m.reply(`📐 lb→kg: ${n} → *${out.toFixed(4)}* kg`);
});

cmd({ pattern: 'm2ft', desc: 'Convert m→ft', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .m2ft number');
  const out=(n)*3.28084;
  await m.reply(`📐 m→ft: ${n} → *${out.toFixed(4)}* ft`);
});

cmd({ pattern: 'ft2m', desc: 'Convert ft→m', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .ft2m number');
  const out=(n)*0.3048;
  await m.reply(`📐 ft→m: ${n} → *${out.toFixed(4)}* m`);
});

cmd({ pattern: 'cm2in', desc: 'Convert cm→in', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .cm2in number');
  const out=(n)*0.393701;
  await m.reply(`📐 cm→in: ${n} → *${out.toFixed(4)}* in`);
});

cmd({ pattern: 'in2cm', desc: 'Convert in→cm', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { text }) => {
  const n=parseFloat(text); if(Number.isNaN(n)) return m.reply('Usage: .in2cm number');
  const out=(n)*2.54;
  await m.reply(`📐 in→cm: ${n} → *${out.toFixed(4)}* cm`);
});

cmd({ pattern: 'percentof1|pct1', desc: 'x% of y helper #1', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct1 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#1] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof2|pct2', desc: 'x% of y helper #2', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct2 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#2] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof3|pct3', desc: 'x% of y helper #3', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct3 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#3] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof4|pct4', desc: 'x% of y helper #4', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct4 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#4] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof5|pct5', desc: 'x% of y helper #5', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct5 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#5] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof6|pct6', desc: 'x% of y helper #6', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct6 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#6] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof7|pct7', desc: 'x% of y helper #7', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct7 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#7] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof8|pct8', desc: 'x% of y helper #8', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct8 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#8] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof9|pct9', desc: 'x% of y helper #9', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct9 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#9] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof10|pct10', desc: 'x% of y helper #10', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct10 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#10] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof11|pct11', desc: 'x% of y helper #11', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct11 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#11] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof12|pct12', desc: 'x% of y helper #12', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct12 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#12] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof13|pct13', desc: 'x% of y helper #13', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct13 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#13] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof14|pct14', desc: 'x% of y helper #14', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct14 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#14] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof15|pct15', desc: 'x% of y helper #15', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct15 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#15] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof16|pct16', desc: 'x% of y helper #16', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct16 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#16] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof17|pct17', desc: 'x% of y helper #17', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct17 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#17] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof18|pct18', desc: 'x% of y helper #18', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct18 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#18] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof19|pct19', desc: 'x% of y helper #19', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct19 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#19] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof20|pct20', desc: 'x% of y helper #20', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct20 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#20] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof21|pct21', desc: 'x% of y helper #21', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct21 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#21] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof22|pct22', desc: 'x% of y helper #22', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct22 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#22] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof23|pct23', desc: 'x% of y helper #23', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct23 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#23] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof24|pct24', desc: 'x% of y helper #24', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct24 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#24] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof25|pct25', desc: 'x% of y helper #25', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct25 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#25] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof26|pct26', desc: 'x% of y helper #26', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct26 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#26] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof27|pct27', desc: 'x% of y helper #27', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct27 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#27] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof28|pct28', desc: 'x% of y helper #28', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct28 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#28] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof29|pct29', desc: 'x% of y helper #29', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct29 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#29] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof30|pct30', desc: 'x% of y helper #30', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct30 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#30] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof31|pct31', desc: 'x% of y helper #31', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct31 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#31] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof32|pct32', desc: 'x% of y helper #32', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct32 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#32] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof33|pct33', desc: 'x% of y helper #33', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct33 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#33] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof34|pct34', desc: 'x% of y helper #34', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct34 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#34] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof35|pct35', desc: 'x% of y helper #35', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct35 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#35] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof36|pct36', desc: 'x% of y helper #36', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct36 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#36] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof37|pct37', desc: 'x% of y helper #37', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct37 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#37] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof38|pct38', desc: 'x% of y helper #38', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct38 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#38] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof39|pct39', desc: 'x% of y helper #39', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct39 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#39] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof40|pct40', desc: 'x% of y helper #40', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct40 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#40] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof41|pct41', desc: 'x% of y helper #41', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct41 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#41] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof42|pct42', desc: 'x% of y helper #42', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct42 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#42] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof43|pct43', desc: 'x% of y helper #43', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct43 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#43] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof44|pct44', desc: 'x% of y helper #44', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct44 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#44] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof45|pct45', desc: 'x% of y helper #45', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct45 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#45] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof46|pct46', desc: 'x% of y helper #46', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct46 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#46] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof47|pct47', desc: 'x% of y helper #47', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct47 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#47] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof48|pct48', desc: 'x% of y helper #48', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct48 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#48] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof49|pct49', desc: 'x% of y helper #49', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct49 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#49] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof50|pct50', desc: 'x% of y helper #50', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct50 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#50] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof51|pct51', desc: 'x% of y helper #51', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct51 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#51] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof52|pct52', desc: 'x% of y helper #52', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct52 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#52] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof53|pct53', desc: 'x% of y helper #53', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct53 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#53] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof54|pct54', desc: 'x% of y helper #54', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct54 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#54] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof55|pct55', desc: 'x% of y helper #55', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct55 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#55] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof56|pct56', desc: 'x% of y helper #56', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct56 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#56] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof57|pct57', desc: 'x% of y helper #57', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct57 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#57] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof58|pct58', desc: 'x% of y helper #58', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct58 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#58] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof59|pct59', desc: 'x% of y helper #59', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct59 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#59] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof60|pct60', desc: 'x% of y helper #60', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct60 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#60] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof61|pct61', desc: 'x% of y helper #61', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct61 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#61] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof62|pct62', desc: 'x% of y helper #62', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct62 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#62] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof63|pct63', desc: 'x% of y helper #63', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct63 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#63] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof64|pct64', desc: 'x% of y helper #64', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct64 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#64] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof65|pct65', desc: 'x% of y helper #65', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct65 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#65] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof66|pct66', desc: 'x% of y helper #66', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct66 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#66] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof67|pct67', desc: 'x% of y helper #67', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct67 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#67] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof68|pct68', desc: 'x% of y helper #68', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct68 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#68] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof69|pct69', desc: 'x% of y helper #69', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct69 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#69] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof70|pct70', desc: 'x% of y helper #70', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct70 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#70] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof71|pct71', desc: 'x% of y helper #71', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct71 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#71] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof72|pct72', desc: 'x% of y helper #72', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct72 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#72] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof73|pct73', desc: 'x% of y helper #73', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct73 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#73] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof74|pct74', desc: 'x% of y helper #74', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct74 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#74] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof75|pct75', desc: 'x% of y helper #75', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct75 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#75] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof76|pct76', desc: 'x% of y helper #76', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct76 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#76] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof77|pct77', desc: 'x% of y helper #77', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct77 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#77] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof78|pct78', desc: 'x% of y helper #78', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct78 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#78] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof79|pct79', desc: 'x% of y helper #79', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct79 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#79] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof80|pct80', desc: 'x% of y helper #80', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct80 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#80] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof81|pct81', desc: 'x% of y helper #81', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct81 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#81] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof82|pct82', desc: 'x% of y helper #82', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct82 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#82] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof83|pct83', desc: 'x% of y helper #83', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct83 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#83] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

cmd({ pattern: 'percentof84|pct84', desc: 'x% of y helper #84', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct84 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#84] ${a}% of ${b} = *${r.toFixed(4)}* (bias 0)`);
});

cmd({ pattern: 'percentof85|pct85', desc: 'x% of y helper #85', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct85 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#85] ${a}% of ${b} = *${r.toFixed(4)}* (bias 1)`);
});

cmd({ pattern: 'percentof86|pct86', desc: 'x% of y helper #86', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct86 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#86] ${a}% of ${b} = *${r.toFixed(4)}* (bias 2)`);
});

cmd({ pattern: 'percentof87|pct87', desc: 'x% of y helper #87', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct87 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#87] ${a}% of ${b} = *${r.toFixed(4)}* (bias 3)`);
});

cmd({ pattern: 'percentof88|pct88', desc: 'x% of y helper #88', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct88 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#88] ${a}% of ${b} = *${r.toFixed(4)}* (bias 4)`);
});

cmd({ pattern: 'percentof89|pct89', desc: 'x% of y helper #89', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct89 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#89] ${a}% of ${b} = *${r.toFixed(4)}* (bias 5)`);
});

cmd({ pattern: 'percentof90|pct90', desc: 'x% of y helper #90', category: 'tools', filename: 'pack-convert-bulk.js' }, async (s, m, { args }) => {
  const a=parseFloat(args[0]); const b=parseFloat(args[1]);
  if(Number.isNaN(a)||Number.isNaN(b)) return m.reply('Usage: .pct90 percent total');
  const r=(a/100)*b;
  await m.reply(`📊 [#90] ${a}% of ${b} = *${r.toFixed(4)}* (bias 6)`);
});

