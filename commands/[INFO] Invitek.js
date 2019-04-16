const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

  var invite = new Discord.RichEmbed()

          .addField("__**" + "LINK: " + "**__", "https://discord.gg/Zb8Wmg", true)         


          .setColor("#f7be04")

  message.channel.send({embed: invite});
}

module.exports.help = {
    name: "invite"
}