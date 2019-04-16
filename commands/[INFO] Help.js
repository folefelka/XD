const Discord = require("discord.js");
const folefel = "Kangurek By: Folefel#1162"

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**POMOC**")
    .setFooter(folefel)
    .setColor("#f7be04")
    .setThumbnail("https://images-ext-2.discordapp.net/external/V20rFXxwRD_Zji0Kfm6S6OUW1yhO3CTiPkJIVg8mgP8/http/www.gimpuj.info/gallery/30301_01_04_10_7_21_26.gif")
    .addField("Informacyjne:", "```- Serverinfo || Wyświetla Informacje O Serwerze. \n- Botinfo ||  Wyświetla Informacje O Bocie.```")
    .addField("Moderacyjne:", "```- Ban || Banuje Użytkownika. \n- Kick || Wyrzuca Użytkownika. \n- Clear || Usuwa Wiadomości.```")
    .addField("4FUN:", "```- Pytanie || Zadaj Pytanie Botu !.```")

    message.channel.send(botembed);
}

module.exports.help = {
  name:"pomoc"
}