const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("662010302790893590")
setInterval(function() {
channel.send(`انا حكيم اسطورة الاساطيرDDS`);
}, 30)
})

client.login(process.env.BOT_TOKEN);