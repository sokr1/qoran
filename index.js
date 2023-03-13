

///////////////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();

const request = require('request');
const prefix = "q#"; // البرافيكس
const GUILDID = '995249766411812874'; // اي دي السيرفر  
const CHANNELID = '1079401521692815491'; // اي دي الروم


client.on("ready", () => {
  console.log(`${client.user.tag}`);
   console.log(`${client.guilds.cache.size} Servers`);
  console.log(`${client.users.cache.size} Members`);
   console.log(`${client.channels.cache.size} Channels`);
  console.log(`[ ${client.guilds.cache.map(g => g.name).join(", \n ")} ]`);
  client.user.setActivity(`هل صليت علي النبي اليوم`, { type: "WATCHING" });
});

const url = 'https://Qurango.net/radio/tarateel'; // هنا فديو الخاص ب القرأن الكريم كامل // CODE BY KAHRBAA 

client.on('ready', async () => {
  console.log('تـم تشغيل القرأن الكريم');
  // CODE BY KAHRBAA كههربا
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if (!guildid) throw new Error('ـاكد انك حطط ايدي السيرفر');
    if (!channelid) throw new Error('تـاكد انك حطط ايدي الروم');

    let guild = client.guilds.cache.get(guildid);
    const voiceChannel = guild.channels.cache.get(channelid);;
    if (!voiceChannel) {
      return
    }// CODE BY KAHRBAA كههربا
    voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.play(url);
      });
  }
});



client.login("MTA3OTQwMzU3ODI4NTkwMzg5Mg.Ge8QKt.8QXPreO8-hsts37HBgOP_iqykAIP9JWhEM9Nzg");