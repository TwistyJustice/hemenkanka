const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

let no = "<a:carp:803311815441383424>"; 
let yes = "<a:tik:802945756754345985>";

let embed = new Discord.MessageEmbed().setFooter("bu tür botlar için **Kaizen.#1687**").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if (!message.member.roles.cache.some(r => ["800350422309011486"].includes(r.id)) && !message.member.hasPermission("ADMINISTRATOR")) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz.`).setFooter("kaizen💜prison"))
return;    
};

if(!hedefKişi) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} `).setFooter("kaizen💜prison"))
return;    
};

if (db.fetch(`taglıAlım.${message.guild.id}`)) {
if(!hedefKişi.user.username.includes("ス") && !hedefKişi.roles.cache.has("800350448434937916") && !hedefKişi.roles.cache.has("765591026709561345")) {
message.channel.send(embed.setDescription(`${hedefKişi} Adlı üye **tagımızı** almadığı yada **boost** basmadığı için veya **vip** olmadığı için kaydı yapılamadı`).setFooter("kaizen💜prison"))    
};
return;   
}

db.add(`erkekTeyit.${message.author.id}`, 1);
db.add(`topTeyit.${message.author.id}`, 1);
hedefKişi.roles.add("800350462129340437");
hedefKişi.roles.add("800350463051694090");
hedefKişi.roles.remove("800350458820558858");
message.react(yes);
message.channel.send(embed.setDescription(`${hedefKişi} adlı üyeye başarıyla **erkek** rolleri verildi ${client.emojis.cache.get(yes)}`).setFooter("kaizen💜"))
};

exports.config = {
  name: "erkek",
  guildOnly: true,
  aliases: ["e", "man"],
};
