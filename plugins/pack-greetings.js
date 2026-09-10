/** Greeting / wish commands */
import { cmd } from '../command.js';

cmd({ pattern: 'goodmorning|gmorning', desc: 'Wish good morning', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good morning, *${who}*! Hope your morning is wonderful.`);
});

cmd({ pattern: 'goodafternoon|gafternoon', desc: 'Wish good afternoon', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good afternoon, *${who}*! Hope your afternoon is wonderful.`);
});

cmd({ pattern: 'goodevening|gevening', desc: 'Wish good evening', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good evening, *${who}*! Hope your evening is wonderful.`);
});

cmd({ pattern: 'goodnite|gnitewish', desc: 'Wish good night', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good night, *${who}*! Hope your night is wonderful.`);
});

cmd({ pattern: 'goodnoon|gnoon', desc: 'Wish good noon', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good noon, *${who}*! Hope your noon is wonderful.`);
});

cmd({ pattern: 'goodmidnight|gmidnight', desc: 'Wish good midnight', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good midnight, *${who}*! Hope your midnight is wonderful.`);
});

cmd({ pattern: 'gooddawn|gdawn', desc: 'Wish good dawn', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good dawn, *${who}*! Hope your dawn is wonderful.`);
});

cmd({ pattern: 'gooddusk|gdusk', desc: 'Wish good dusk', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good dusk, *${who}*! Hope your dusk is wonderful.`);
});

cmd({ pattern: 'goodsunrise|gsunrise', desc: 'Wish good sunrise', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good sunrise, *${who}*! Hope your sunrise is wonderful.`);
});

cmd({ pattern: 'goodsunset|gsunset', desc: 'Wish good sunset', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🌤️ Good sunset, *${who}*! Hope your sunset is wonderful.`);
});

cmd({ pattern: 'wishbirthday|birthdaywish', desc: 'birthday wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy birthday, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wisheid|eidwish', desc: 'eid wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy eid, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishramadan|ramadanwish', desc: 'ramadan wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy ramadan, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishfriday|fridaywish', desc: 'friday wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy friday, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishnewyear|newyearwish', desc: 'newyear wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy newyear, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishchristmas|christmaswish', desc: 'christmas wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy christmas, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishhalloween|halloweenwish', desc: 'halloween wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy halloween, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishvalentine|valentinewish', desc: 'valentine wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy valentine, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishanniversary|anniversarywish', desc: 'anniversary wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy anniversary, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishwedding|weddingwish', desc: 'wedding wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy wedding, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishgraduation|graduationwish', desc: 'graduation wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy graduation, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishpromotion|promotionwish', desc: 'promotion wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy promotion, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishrecovery|recoverywish', desc: 'recovery wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy recovery, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishcongrats|congratswish', desc: 'congrats wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy congrats, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishwelcome|welcomewish', desc: 'welcome wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy welcome, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishgoodbye|goodbyewish', desc: 'goodbye wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy goodbye, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishfarewell|farewellwish', desc: 'farewell wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy farewell, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishhello|hellowish', desc: 'hello wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy hello, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishhi|hiwish', desc: 'hi wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy hi, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishsalam|salamwish', desc: 'salam wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy salam, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishjummah|jummahwish', desc: 'jummah wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy jummah, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishiftar|iftarwish', desc: 'iftar wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy iftar, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishsehri|sehriwish', desc: 'sehri wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy sehri, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishhajj|hajjwish', desc: 'hajj wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy hajj, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishumrah|umrahwish', desc: 'umrah wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy umrah, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishmilad|miladwish', desc: 'milad wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy milad, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishshabebarat|shabebaratwish', desc: 'shabebarat wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy shabebarat, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishlaylatulqadr|laylatulqadrwish', desc: 'laylatulqadr wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy laylatulqadr, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishashura|ashurawish', desc: 'ashura wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy ashura, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'wishmuharram|muharramwish', desc: 'muharram wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'friend';
  await m.reply(`🎉 Happy muharram, *${who}*! May Allah bless you. ✨`);
});

cmd({ pattern: 'vibeblessed|blessedvibe', desc: 'blessed vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *blessed* vibes to *${who}*.`);
});

cmd({ pattern: 'vibepeaceful|peacefulvibe', desc: 'peaceful vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *peaceful* vibes to *${who}*.`);
});

cmd({ pattern: 'vibeproductive|productivevibe', desc: 'productive vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *productive* vibes to *${who}*.`);
});

cmd({ pattern: 'vibechill|chillvibe', desc: 'chill vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *chill* vibes to *${who}*.`);
});

cmd({ pattern: 'vibehype|hypevibe', desc: 'hype vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *hype* vibes to *${who}*.`);
});

cmd({ pattern: 'vibegrateful|gratefulvibe', desc: 'grateful vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *grateful* vibes to *${who}*.`);
});

cmd({ pattern: 'vibefocused|focusedvibe', desc: 'focused vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *focused* vibes to *${who}*.`);
});

cmd({ pattern: 'vibecreative|creativevibe', desc: 'creative vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *creative* vibes to *${who}*.`);
});

cmd({ pattern: 'vibestrong|strongvibe', desc: 'strong vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *strong* vibes to *${who}*.`);
});

cmd({ pattern: 'vibehappy|happyvibe', desc: 'happy vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *happy* vibes to *${who}*.`);
});

cmd({ pattern: 'vibelucky|luckyvibe', desc: 'lucky vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *lucky* vibes to *${who}*.`);
});

cmd({ pattern: 'vibemagical|magicalvibe', desc: 'magical vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *magical* vibes to *${who}*.`);
});

cmd({ pattern: 'vibeepic|epicvibe', desc: 'epic vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *epic* vibes to *${who}*.`);
});

cmd({ pattern: 'vibefresh|freshvibe', desc: 'fresh vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *fresh* vibes to *${who}*.`);
});

cmd({ pattern: 'vibecozy|cozyvibe', desc: 'cozy vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *cozy* vibes to *${who}*.`);
});

cmd({ pattern: 'vibeenergetic|energeticvibe', desc: 'energetic vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *energetic* vibes to *${who}*.`);
});

cmd({ pattern: 'vibecalm|calmvibe', desc: 'calm vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *calm* vibes to *${who}*.`);
});

cmd({ pattern: 'vibebold|boldvibe', desc: 'bold vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *bold* vibes to *${who}*.`);
});

cmd({ pattern: 'vibekind|kindvibe', desc: 'kind vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *kind* vibes to *${who}*.`);
});

cmd({ pattern: 'vibebrave|bravevibe', desc: 'brave vibe wish', category: 'fun', filename: 'pack-greetings.js' }, async (s, m, { text }) => {
  const who = text || m.pushName || 'you';
  await m.reply(`✨ Sending *brave* vibes to *${who}*.`);
});

