/** Bulk anime image cmds via waifu.pics */
import axios from 'axios';
import { cmd } from '../command.js';
import { pick } from '../lib/functions.js';

const CATS = ["waifu","neko","shinobu","megumin","bully","cuddle","cry","hug","awoo","kiss","lick","pat","smug","bonk","yeet","blush","smile","wave","highfive","handhold","nom","bite","glomp","slap","kill","kick","happy","wink","poke","dance","cringe"];
async function getUrl(cat){const {data}=await axios.get('https://api.waifu.pics/sfw/'+cat,{timeout:20000});return data?.url}

cmd({ pattern: 'picwaifu|sfwwaifu', desc: 'SFW waifu image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('waifu'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 waifu'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picneko|sfwneko', desc: 'SFW neko image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('neko'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 neko'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picshinobu|sfwshinobu', desc: 'SFW shinobu image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('shinobu'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 shinobu'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picmegumin|sfwmegumin', desc: 'SFW megumin image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('megumin'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 megumin'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picbully|sfwbully', desc: 'SFW bully image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('bully'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 bully'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'piccuddle|sfwcuddle', desc: 'SFW cuddle image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('cuddle'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 cuddle'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'piccry|sfwcry', desc: 'SFW cry image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('cry'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 cry'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'pichug|sfwhug', desc: 'SFW hug image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('hug'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 hug'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picawoo|sfwawoo', desc: 'SFW awoo image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('awoo'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 awoo'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'pickiss|sfwkiss', desc: 'SFW kiss image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('kiss'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 kiss'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'piclick|sfwlick', desc: 'SFW lick image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('lick'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 lick'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picpat|sfwpat', desc: 'SFW pat image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('pat'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 pat'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picsmug|sfwsmug', desc: 'SFW smug image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('smug'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 smug'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picbonk|sfwbonk', desc: 'SFW bonk image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('bonk'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 bonk'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picyeet|sfwyeet', desc: 'SFW yeet image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('yeet'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 yeet'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picblush|sfwblush', desc: 'SFW blush image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('blush'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 blush'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picsmile|sfwsmile', desc: 'SFW smile image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('smile'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 smile'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picwave|sfwwave', desc: 'SFW wave image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('wave'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 wave'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'pichighfive|sfwhighfive', desc: 'SFW highfive image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('highfive'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 highfive'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'pichandhold|sfwhandhold', desc: 'SFW handhold image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('handhold'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 handhold'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picnom|sfwnom', desc: 'SFW nom image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('nom'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 nom'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picbite|sfwbite', desc: 'SFW bite image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('bite'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 bite'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picglomp|sfwglomp', desc: 'SFW glomp image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('glomp'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 glomp'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picslap|sfwslap', desc: 'SFW slap image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('slap'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 slap'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'pickill|sfwkill', desc: 'SFW kill image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('kill'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 kill'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'pickick|sfwkick', desc: 'SFW kick image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('kick'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 kick'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'pichappy|sfwhappy', desc: 'SFW happy image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('happy'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 happy'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picwink|sfwwink', desc: 'SFW wink image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('wink'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 wink'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picpoke|sfwpoke', desc: 'SFW poke image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('poke'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 poke'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'picdance|sfwdance', desc: 'SFW dance image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('dance'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 dance'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'piccringe|sfwcringe', desc: 'SFW cringe image', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { await m.react('🌸'); const url=await getUrl('cringe'); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:'🌸 cringe'},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic1|apic1', desc: 'Random anime pic #1', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(1-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${1} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic2|apic2', desc: 'Random anime pic #2', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(2-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${2} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic3|apic3', desc: 'Random anime pic #3', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(3-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${3} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic4|apic4', desc: 'Random anime pic #4', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(4-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${4} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic5|apic5', desc: 'Random anime pic #5', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(5-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${5} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic6|apic6', desc: 'Random anime pic #6', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(6-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${6} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic7|apic7', desc: 'Random anime pic #7', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(7-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${7} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic8|apic8', desc: 'Random anime pic #8', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(8-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${8} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic9|apic9', desc: 'Random anime pic #9', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(9-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${9} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic10|apic10', desc: 'Random anime pic #10', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(10-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${10} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic11|apic11', desc: 'Random anime pic #11', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(11-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${11} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic12|apic12', desc: 'Random anime pic #12', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(12-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${12} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic13|apic13', desc: 'Random anime pic #13', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(13-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${13} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic14|apic14', desc: 'Random anime pic #14', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(14-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${14} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic15|apic15', desc: 'Random anime pic #15', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(15-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${15} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic16|apic16', desc: 'Random anime pic #16', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(16-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${16} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic17|apic17', desc: 'Random anime pic #17', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(17-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${17} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic18|apic18', desc: 'Random anime pic #18', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(18-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${18} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic19|apic19', desc: 'Random anime pic #19', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(19-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${19} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic20|apic20', desc: 'Random anime pic #20', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(20-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${20} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic21|apic21', desc: 'Random anime pic #21', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(21-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${21} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic22|apic22', desc: 'Random anime pic #22', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(22-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${22} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic23|apic23', desc: 'Random anime pic #23', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(23-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${23} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic24|apic24', desc: 'Random anime pic #24', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(24-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${24} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic25|apic25', desc: 'Random anime pic #25', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(25-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${25} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic26|apic26', desc: 'Random anime pic #26', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(26-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${26} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic27|apic27', desc: 'Random anime pic #27', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(27-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${27} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic28|apic28', desc: 'Random anime pic #28', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(28-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${28} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic29|apic29', desc: 'Random anime pic #29', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(29-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${29} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic30|apic30', desc: 'Random anime pic #30', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(30-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${30} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic31|apic31', desc: 'Random anime pic #31', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(31-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${31} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic32|apic32', desc: 'Random anime pic #32', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(32-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${32} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic33|apic33', desc: 'Random anime pic #33', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(33-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${33} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic34|apic34', desc: 'Random anime pic #34', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(34-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${34} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic35|apic35', desc: 'Random anime pic #35', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(35-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${35} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic36|apic36', desc: 'Random anime pic #36', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(36-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${36} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic37|apic37', desc: 'Random anime pic #37', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(37-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${37} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic38|apic38', desc: 'Random anime pic #38', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(38-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${38} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic39|apic39', desc: 'Random anime pic #39', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(39-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${39} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic40|apic40', desc: 'Random anime pic #40', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(40-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${40} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic41|apic41', desc: 'Random anime pic #41', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(41-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${41} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic42|apic42', desc: 'Random anime pic #42', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(42-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${42} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic43|apic43', desc: 'Random anime pic #43', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(43-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${43} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic44|apic44', desc: 'Random anime pic #44', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(44-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${44} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic45|apic45', desc: 'Random anime pic #45', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(45-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${45} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic46|apic46', desc: 'Random anime pic #46', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(46-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${46} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic47|apic47', desc: 'Random anime pic #47', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(47-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${47} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic48|apic48', desc: 'Random anime pic #48', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(48-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${48} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic49|apic49', desc: 'Random anime pic #49', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(49-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${49} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic50|apic50', desc: 'Random anime pic #50', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(50-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${50} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic51|apic51', desc: 'Random anime pic #51', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(51-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${51} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic52|apic52', desc: 'Random anime pic #52', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(52-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${52} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic53|apic53', desc: 'Random anime pic #53', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(53-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${53} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic54|apic54', desc: 'Random anime pic #54', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(54-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${54} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic55|apic55', desc: 'Random anime pic #55', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(55-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${55} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic56|apic56', desc: 'Random anime pic #56', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(56-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${56} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic57|apic57', desc: 'Random anime pic #57', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(57-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${57} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic58|apic58', desc: 'Random anime pic #58', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(58-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${58} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic59|apic59', desc: 'Random anime pic #59', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(59-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${59} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic60|apic60', desc: 'Random anime pic #60', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(60-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${60} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic61|apic61', desc: 'Random anime pic #61', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(61-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${61} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic62|apic62', desc: 'Random anime pic #62', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(62-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${62} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic63|apic63', desc: 'Random anime pic #63', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(63-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${63} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic64|apic64', desc: 'Random anime pic #64', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(64-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${64} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic65|apic65', desc: 'Random anime pic #65', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(65-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${65} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic66|apic66', desc: 'Random anime pic #66', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(66-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${66} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic67|apic67', desc: 'Random anime pic #67', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(67-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${67} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic68|apic68', desc: 'Random anime pic #68', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(68-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${68} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic69|apic69', desc: 'Random anime pic #69', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(69-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${69} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic70|apic70', desc: 'Random anime pic #70', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(70-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${70} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic71|apic71', desc: 'Random anime pic #71', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(71-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${71} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic72|apic72', desc: 'Random anime pic #72', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(72-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${72} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic73|apic73', desc: 'Random anime pic #73', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(73-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${73} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic74|apic74', desc: 'Random anime pic #74', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(74-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${74} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic75|apic75', desc: 'Random anime pic #75', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(75-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${75} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic76|apic76', desc: 'Random anime pic #76', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(76-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${76} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic77|apic77', desc: 'Random anime pic #77', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(77-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${77} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic78|apic78', desc: 'Random anime pic #78', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(78-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${78} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic79|apic79', desc: 'Random anime pic #79', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(79-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${79} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic80|apic80', desc: 'Random anime pic #80', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(80-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${80} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic81|apic81', desc: 'Random anime pic #81', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(81-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${81} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic82|apic82', desc: 'Random anime pic #82', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(82-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${82} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic83|apic83', desc: 'Random anime pic #83', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(83-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${83} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic84|apic84', desc: 'Random anime pic #84', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(84-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${84} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic85|apic85', desc: 'Random anime pic #85', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(85-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${85} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic86|apic86', desc: 'Random anime pic #86', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(86-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${86} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic87|apic87', desc: 'Random anime pic #87', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(87-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${87} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic88|apic88', desc: 'Random anime pic #88', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(88-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${88} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic89|apic89', desc: 'Random anime pic #89', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(89-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${89} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic90|apic90', desc: 'Random anime pic #90', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(90-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${90} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic91|apic91', desc: 'Random anime pic #91', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(91-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${91} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic92|apic92', desc: 'Random anime pic #92', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(92-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${92} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic93|apic93', desc: 'Random anime pic #93', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(93-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${93} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic94|apic94', desc: 'Random anime pic #94', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(94-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${94} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic95|apic95', desc: 'Random anime pic #95', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(95-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${95} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic96|apic96', desc: 'Random anime pic #96', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(96-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${96} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic97|apic97', desc: 'Random anime pic #97', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(97-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${97} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic98|apic98', desc: 'Random anime pic #98', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(98-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${98} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic99|apic99', desc: 'Random anime pic #99', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(99-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${99} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'animepic100|apic100', desc: 'Random anime pic #100', category: 'anime', filename: 'pack-anime-bulk.js' }, async (s, m) => {
  try { const cat = CATS[(100-1)%CATS.length]; const url=await getUrl(cat); if(!url)return m.reply('No image'); await s.sendMessage(m.chat,{image:{url},caption:`🌸 #${100} ${cat}`},{quoted:m}); } catch(e){ await m.reply('Failed: '+e.message);} 
});

