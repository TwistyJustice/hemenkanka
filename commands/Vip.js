const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

  let no = "<a:carp:803311815441383424>"; 
  let yes = "<a:tik:802945756754345985>";

let embed = new Discord.MessageEmbed().setFooter("böyle botlar için **Kaizen.#1687**").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let vipRolu = "800350448434937916";

if (!message.member.roles.cache.has("800350422309011486") && !message.member.hasPermission("ADMINISTRATOR")) return;

if(!hedefKişi) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Geçerli bir üye belirtmelisiniz.`).setFooter("Kaizen🖤prisone"))
return;    
};
    
hedefKişi.roles.cache.has(vipRolu) ? hedefKişi.roles.remove(vipRolu) : hedefKişi.roles.add(vipRolu) 
return message.react(yes);
};

exports.config = {
  name: "vip",
  guildOnly: true,
  aliases: ["özelüye", "vip"],
};
