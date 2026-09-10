/** Lightweight group helper / info cmds */
import { cmd } from '../command.js';
import { jidToNum } from '../lib/functions.js';

cmd({ pattern: 'gcstat1|groupstat1', desc: 'Group stat snapshot #1', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${1}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 1`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat2|groupstat2', desc: 'Group stat snapshot #2', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${2}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 2`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat3|groupstat3', desc: 'Group stat snapshot #3', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${3}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 3`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat4|groupstat4', desc: 'Group stat snapshot #4', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${4}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 4`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat5|groupstat5', desc: 'Group stat snapshot #5', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${5}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 5`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat6|groupstat6', desc: 'Group stat snapshot #6', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${6}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 6`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat7|groupstat7', desc: 'Group stat snapshot #7', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${7}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 7`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat8|groupstat8', desc: 'Group stat snapshot #8', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${8}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 8`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat9|groupstat9', desc: 'Group stat snapshot #9', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${9}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 9`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat10|groupstat10', desc: 'Group stat snapshot #10', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${10}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 10`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat11|groupstat11', desc: 'Group stat snapshot #11', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${11}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 11`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat12|groupstat12', desc: 'Group stat snapshot #12', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${12}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 12`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat13|groupstat13', desc: 'Group stat snapshot #13', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${13}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 13`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat14|groupstat14', desc: 'Group stat snapshot #14', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${14}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 14`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat15|groupstat15', desc: 'Group stat snapshot #15', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${15}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 15`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat16|groupstat16', desc: 'Group stat snapshot #16', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${16}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 16`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat17|groupstat17', desc: 'Group stat snapshot #17', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${17}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 17`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat18|groupstat18', desc: 'Group stat snapshot #18', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${18}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 18`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat19|groupstat19', desc: 'Group stat snapshot #19', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${19}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 19`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat20|groupstat20', desc: 'Group stat snapshot #20', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${20}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 20`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat21|groupstat21', desc: 'Group stat snapshot #21', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${21}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 21`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat22|groupstat22', desc: 'Group stat snapshot #22', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${22}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 22`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat23|groupstat23', desc: 'Group stat snapshot #23', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${23}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 23`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat24|groupstat24', desc: 'Group stat snapshot #24', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${24}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 24`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat25|groupstat25', desc: 'Group stat snapshot #25', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${25}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 25`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat26|groupstat26', desc: 'Group stat snapshot #26', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${26}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 26`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat27|groupstat27', desc: 'Group stat snapshot #27', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${27}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 27`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat28|groupstat28', desc: 'Group stat snapshot #28', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${28}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 28`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat29|groupstat29', desc: 'Group stat snapshot #29', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${29}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 29`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat30|groupstat30', desc: 'Group stat snapshot #30', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${30}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 30`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat31|groupstat31', desc: 'Group stat snapshot #31', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${31}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 31`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat32|groupstat32', desc: 'Group stat snapshot #32', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${32}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 32`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat33|groupstat33', desc: 'Group stat snapshot #33', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${33}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 33`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat34|groupstat34', desc: 'Group stat snapshot #34', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${34}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 34`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat35|groupstat35', desc: 'Group stat snapshot #35', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${35}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 35`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat36|groupstat36', desc: 'Group stat snapshot #36', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${36}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 36`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat37|groupstat37', desc: 'Group stat snapshot #37', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${37}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 37`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat38|groupstat38', desc: 'Group stat snapshot #38', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${38}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 38`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat39|groupstat39', desc: 'Group stat snapshot #39', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${39}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 39`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'gcstat40|groupstat40', desc: 'Group stat snapshot #40', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  try {
    const meta=await s.groupMetadata(m.chat);
    const admins=meta.participants.filter(p=>p.admin).length;
    await m.reply(`📋 GC stat #${40}\n• name: ${meta.subject}\n• members: ${meta.participants.length}\n• admins: ${admins}\n• id: ${m.chat}\n• slot: 40`);
  } catch(e){ await m.reply('Failed: '+e.message);} 
});

cmd({ pattern: 'admincount1|acount1', desc: 'Count admins #1', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${1}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount2|acount2', desc: 'Count admins #2', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${2}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount3|acount3', desc: 'Count admins #3', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${3}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount4|acount4', desc: 'Count admins #4', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${4}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount5|acount5', desc: 'Count admins #5', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${5}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount6|acount6', desc: 'Count admins #6', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${6}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount7|acount7', desc: 'Count admins #7', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${7}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount8|acount8', desc: 'Count admins #8', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${8}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount9|acount9', desc: 'Count admins #9', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${9}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount10|acount10', desc: 'Count admins #10', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${10}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount11|acount11', desc: 'Count admins #11', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${11}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount12|acount12', desc: 'Count admins #12', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${12}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount13|acount13', desc: 'Count admins #13', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${13}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount14|acount14', desc: 'Count admins #14', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${14}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount15|acount15', desc: 'Count admins #15', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${15}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount16|acount16', desc: 'Count admins #16', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${16}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount17|acount17', desc: 'Count admins #17', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${17}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount18|acount18', desc: 'Count admins #18', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${18}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount19|acount19', desc: 'Count admins #19', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${19}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount20|acount20', desc: 'Count admins #20', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${20}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount21|acount21', desc: 'Count admins #21', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${21}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount22|acount22', desc: 'Count admins #22', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${22}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount23|acount23', desc: 'Count admins #23', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${23}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount24|acount24', desc: 'Count admins #24', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${24}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount25|acount25', desc: 'Count admins #25', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${25}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount26|acount26', desc: 'Count admins #26', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${26}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount27|acount27', desc: 'Count admins #27', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${27}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount28|acount28', desc: 'Count admins #28', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${28}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount29|acount29', desc: 'Count admins #29', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${29}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount30|acount30', desc: 'Count admins #30', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${30}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount31|acount31', desc: 'Count admins #31', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${31}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount32|acount32', desc: 'Count admins #32', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${32}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount33|acount33', desc: 'Count admins #33', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${33}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount34|acount34', desc: 'Count admins #34', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${34}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount35|acount35', desc: 'Count admins #35', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${35}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount36|acount36', desc: 'Count admins #36', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${36}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount37|acount37', desc: 'Count admins #37', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${37}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount38|acount38', desc: 'Count admins #38', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${38}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount39|acount39', desc: 'Count admins #39', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${39}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

cmd({ pattern: 'admincount40|acount40', desc: 'Count admins #40', category: 'group', filename: 'pack-group-bulk.js' }, async (s, m) => {
  if (!m.isGroup) return m.reply('Group only.');
  const meta=await s.groupMetadata(m.chat);
  const admins=meta.participants.filter(p=>p.admin);
  await m.reply(`🛡️ Admins #${40}: ${admins.length}\n${admins.slice(0,15).map((p,idx)=> (idx+1)+'. @'+jidToNum(p.id)).join('\n')}`, { mentions: admins.map(p=>p.id) });
});

