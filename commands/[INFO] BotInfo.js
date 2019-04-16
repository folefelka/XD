const Discord = require("discord.js");
const folefel = "Kangurek By: Folefel#1162"

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Infomracje o Bocie**")
    .setFooter(folefel)
    .setURL("https://cdn.discordapp.com/attachments/445627853795622921/567705748893728768/kangur.jpg")
    .setColor("#f7be04")
    .setThumbnail(bicon)
    .addField("Nazwa", bot.user.username, true)
    .addField("Stworzony w", bot.user.createdAt, true)
    .addField("opis", 'potem napisze', true);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}