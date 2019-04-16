const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const folefel = "Kangurek By: Folefel#1162"

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: !kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("KICK")
    .setDescription("hehe :smirk:")
    .setColor("#f7be04")
    .setFooter(folefel)
    .addField("Wyrzucony:", `${kUser} ID ${kUser.id}`)
    .addField("Przez:", `<@${message.author.id}> ID ${message.author.id}`)
    .addField("Powód:", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logi");
    if(!kickChannel) return message.channel.send("none");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}