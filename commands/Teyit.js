const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

  let no = "<a:carp:803311815441383424>"; 
  let yes = "<a:tik:802945756754345985>";

let embed = new Discord.MessageEmbed().setFooter("böyle botlar için **Kaizen.#1687**").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let kızTeyit = db.fetch(`kızTeyit.${hedefKişi.id}`) || "0"
let erkekTeyit = db.fetch(`erkekTeyit.${hedefKişi.id}`) || "0";
let topTeyit = db.fetch(`topTeyit.${hedefKişi.id}`) || "0";

if (!args[1]) {
message.channel.send(embed.setDescription(`
${client.emojis.cache.get(yes)} ${hedefKişi} ( \`${hedefKişi.id}\` ) isimli kullanıcının teyit bilgileri:
    
Erkek teyit: **${erkekTeyit}**
Kız teyit: **${kızTeyit}**
Toplam teyit: **${topTeyit}**
`).setFooter("Kaizen🖤prisone"))
return;
}

if (args[1] === "kız") {
message.channel.send(embed.setDescription(`
${client.emojis.cache.get(yes)} ${hedefKişi} ( \`${hedefKişi.id}\` ) isimli kullanıcının teyit bilgileri:
    
Kız teyit: **${kızTeyit}**
`))
return;
} 
if (args[1] === "erkek") {
message.channel.send(embed.setDescription(`
${client.emojis.cache.get(yes)} ${hedefKişi} ( \`${hedefKişi.id}\` ) isimli kullanıcının teyit bilgileri:
        
Erkek teyit: **${erkekTeyit}**
`))
return;
} 
if (args[1] === "toplam") {
message.channel.send(embed.setDescription(`
${client.emojis.cache.get(yes)} ${hedefKişi} ( \`${hedefKişi.id}\` ) isimli kullanıcının teyit bilgileri:
            
Erkek teyit: **${topTeyit}**
`).setFooter("Kaizen🖤prisone"))
return;
} 
};

exports.config = {
  name: "teyit",
  guildOnly: true,
  aliases: ["teyitbilgi", "teyitler"],
};
