const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

let no = "<a:carp:803311815441383424>"; 
let yes = "<a:tik:802945756754345985>";
let n = no;
let y = yes;

let embed = new Discord.MessageEmbed().setFooter("kaizen💛kain").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if (!message.member.voice.channel) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(yes)} Ses kanalında olmanız gerekmektedir.`).setFooter("kaizen💜kain"))
if (!hedefKişi.voice.channel) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(yes)} Belirttiğiniz üyenin ses kanalında olması gerekmektedir.`).setFooter("kaizen💜kain"))
if (message.member.voice.channelID == hedefKişi.voice.channelID) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(yes)} Belirttiğiniz üye ile aynı ses kanalındasınız!`).setFooter("kaizen💜kain"))

if (message.member.hasPermission("ADMINISTRATOR") && message.member.roles.cache.has("sahip rolü")) {
  await hedefKişi.voice.setChannel(message.member.voice.channelID);
  message.react(yes).catch();
} else {
  const reactionFilter = (reaction, user) => {
    return [yes].includes(reaction.emoji.id) && user.id === hedefKişi.id;
  };
  message.channel.send(`${hedefKişi}`, {embed: embed.setAuthor(hedefKişi.displayName, hedefKişi.user.avatarURL({dynamic: true, size: 2048})).setDescription(`**selam** ${message.author} isimli üye sizi **${message.member.voice.channel.name}** isimli odaya çekmek istiyor. **ne dersin ?**`).setFooter("kaizen💛kain")}).then(async msj => {
    await msj.react(yes);
    msj.awaitReactions(reactionFilter, {max: 1, time: 15000, error: ['time']}).then(c => {
      let cevap = c.first();
  if (cevap) {
    hedefKişi.voice.setChannel(message.member.voice.channelID);
        msj.delete();
        message.react(yes).catch();
  };
    });
  });
};
};

exports.config = {
  name: "çek",
  guildOnly: true,
  aliases: ["getir", "taşı"],
};