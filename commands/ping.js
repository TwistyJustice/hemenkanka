const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

  let no = "<a:carp:803311815441383424>"; 
  let yes = "<a:tik:802945756754345985>";

let embed = new Discord.MessageEmbed().setFooter("kaizen tarafından geliştirildi.").setColor("010030").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();


message.channel.send(client.ws.ping)
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};