const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("with Hugo!", {type: "DATING"});

});

 bot.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd ===`${prefix}botinfo`){

    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#ef0b31")
    .addField("Bot Name", bot.user.username)
    .addField("全名","西木野真姬")
    .addField("生日","4月19日");
      return message.channel.send(botembed)
  }
  if(cmd === `${prefix}hello`) {
    return message.channel.send("Hello ");
  }
  if(cmd === `${prefix}darling`){
    return message.channel.send("My darling is Hugo")
  }
  if(cmd === `${prefix}chicken`){
    return message.channel.send("亞絲娜係臭雞")
  }


});

bot.login(botconfig.token);
