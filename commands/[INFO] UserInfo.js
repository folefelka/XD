const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    var userinf = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setColor("#f7be04")
        .addField("Pełna nazwa:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Dołaczył do DISCORDA:", message.author.createdAt)

        message.channel.send(userinf);

  }else{

    var userinfoo = new Discord.RichEmbed()
        .setAuthor(memberInfo.displayName)
        .setThumbnail(memberInfo.user.avatarURL)
        .setColor("#f7be04")
        .addField("Pełna nazwa:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID:", memberInfo.id)
        .addField("Dołaczyl do DISCORDA:", memberInfo.user.createdAt)

        message.channel.send(userinfoo);
  }
}

module.exports.help = {
    name: "userinfo"
}