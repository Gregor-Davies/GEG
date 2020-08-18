const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "kiss",
    category: "image",
    description: "kiss someone.",
    run: async (client, message, args) => {
            if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them!");
            if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.channel.send("Kiss me daddy!")
            const { body } = await superagent
            .get("https://nekos.life/api/kiss");
            
            const embed = new Discord.MessageEmbed()
            .setColor("0xe17b65")
            .setTitle(`💕 ${message.author.username} kissed ${message.mentions.users.first().username}, ewww!`)
            .setImage(body.url)
            .setTimestamp()
            .setFooter("© Fastsrv") 
            message.channel.send({embed})
    
    }}