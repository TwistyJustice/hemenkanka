const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

  let no = "<a:carp:803311815441383424>"; 
  let yes = "<a:tik:802945756754345985>";
let n = no;
let y = yes;

let reawSayılar = {
  "0": "\`0\`",
  "1": "\`1\`",
  "2": "\`2\`",
  "3": "\`3\`",
  "4": "\`4\`",
  "5": "\`5\`",
  "6": "\`6\`",
  "7": "\`7\`",
  "8": "\`8\`",
  "9": "\`9\`"
};

let tag = "ス";

let embed = new Discord.MessageEmbed().setFooter("böyle botlar için **Kaizen.#1687**").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

message.channel.send(embed.setDescription(`
\`>\` Sunucumuzda toplam ${message.guild.memberCount.toString().split("").map(a => client.emojis.cache.get(reawSayılar[a])).join("")} adet üye bulunmaktadır.
\`>\` Sunucumuzun sesli odalarında ${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b).toString().split("").map(a => client.emojis.cache.get(reawSayılar[a])).join("")} adet üye bulunmaktadır.
\`>\` Sunucumuzun tagında ${message.guild.members.cache.filter(m => m.user.username.includes(tag)).size.toString().split("").map(a => client.emojis.cache.get(reawSayılar[a])).join("")} adet üye bulunmaktadır.
`).setFooter("kaizen💚"))
};

exports.config = {
  name: "say",
  guildOnly: true,
  aliases: ["count", "sayı"],
};