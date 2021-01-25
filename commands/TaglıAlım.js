const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

  let no = "<a:carp:803311815441383424>"; 
  let yes = "<a:tik:802945756754345985>";
let n = no;
let y = yes;

let embed = new Discord.MessageEmbed().setFooter("böyle botlar için **Kaizen.#1687**").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

if (!message.member.roles.cache.has("802464768300417054") && !message.member.hasPermission("ADMINISTRATOR")) return;

if(!args[0]) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Komutu yanlış kullandınız! ${config.prefix}taglıalım aç/kapat`).setFooter("kaizen🤍kain"))
return;    
}
if (args[0] === "aç") {
if(db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi zaten aktif!`).setFooter("kaizen🤍kain"))
db.set(`taglıAlım.${message.guild.id}`, "taglıAlım")
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi aktif edildi!`).setFooter("kaizen🤍kain"))
return;    
} else if (args[0] === "kapat") {
if(!db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi zaten devre dışı!`))
db.delete(`taglıAlım.${message.guild.id}`)
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi devre dışı bırakıldı!`).setFooter("kaizen🤍kain"))
return;    
};

};

exports.config = {
  name: "taglıalım",
  guildOnly: true,
  aliases: ["onlytag", "taglı"],
};
