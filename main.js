const Discord = require("discord.js")    
const client = new Discord.Client();      
const config = require("./config.js") 
const fs = require("fs");
const db = require("quick.db");                
require('./util/Loader.js')(client);    

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                    
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`); 
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name);
    });
  });
})

client.login(config.token)

client.on("guildMemberAdd", reawMember => {
let tag = "";
let tagsızSembolü = "";
if (reawMember.user.username.includes(tag)) {
reawMember.setNickname(`${tag} İsim | Yaş`)
} else if (!reawMember.user.username.includes(tag)) {
  reawMember.setNickname(`${tagsızSembolü} İsim | Yaş`)
}
reawMember.roles.add("800350458820558858");
})

client.on("userUpdate", async (oldUser, newUser) => { 
  let sunucu = `765194683047477258`;
  let kanal = `800350629104844840`;
  let taglı = `800350447717974037`;

  let tag = `ス`;
  let untag = `⭑`;

  let channel = client.guilds.cache.get(sunucu).channels.cache.get(kanal);

  if (oldUser.username !== newUser.username) {
    if (
      newUser.username.includes(tag) &&
      !client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.cache.has(taglı)
    ) {
      await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.add(taglı);

      await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .setNickname(
          client.guilds.cache
            .get(sunucu)
            .members.cache.get(newUser.id)
            .displayName.replace(untag, tag)
        );

      channel.send(`${newUser} adlı kullanıcı "${tag}" sembolünü kullanıcı adına ekleyerek ailemize katıldı.`);
    }
    if (
      !newUser.username.includes(tag) &&
      client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.cache.has(taglı)
    ) {
      if (db.fetch(`taglıAlım.${sunucu}`)) {
        await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.remove(taglı);
        await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.set(["800350458820558858", "800350458820558858"] || []);
      }
      await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.remove(taglı);

      await client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .setNickname(
          client.guilds.cache
            .get(sunucu)
            .members.cache.get(newUser.id)
            .displayName.replace(tag, untag)
        );
      channel.send(`${newUser} adlı kullanıcı "${tag}" sembolünü kullanıcı adından kaldırarak ailemizden ayrıldı.`);
    }
  }
});

client.on("guildMemberAdd", reawMember => {
let g = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
const a = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/694694884459937862/803277009387257896/ltoEnKg.gif");
reawMember.guild.channels.cache.get("kayıt kanal idsi").send(`

:tada: Sunucumuza hoş geldin  ${member} -\`${user.id}\`

Hesabın \` ${memberGün} ${memberAylar} ${memberTarih} \` tarihinde oluşturulduğu için ${g ? "<a:carp:803311815441383424>" : "<a:tik:802945756754345985>"} ${g ? "Tehlikeli!" : "Güvenli!"} gözüküyorsun <a:redanme:802959776241025135>

<@&800350422309011486> rolündeki yetkililer seninle ilgilenicektir.

Kayıt olduktan sonra <#776716998062637087> kanalını okumayı unutma! Kurallara uymayan üyelere ceza işlemi uygulanacaktır!

seninle toplam \`${member.guild.memberCount}\` kişi olduk :tada: :tada :tada:`, a)
if (g) {
reawMember.roles.set(["800350457419268096"])
reawMember.roles.add("800350457419268096")
return;  
}
})
