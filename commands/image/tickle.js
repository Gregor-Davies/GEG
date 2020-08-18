const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "tickle",
    category: "image",
    description: "tickle someone.",
    run: async (client, message, args) => {
            if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them!");
            if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.channel.send("Aww! *cuddles you* ")
            const { body } = await superagent
            .get("https://nekos.life/api/v2/img/tickle");
            
            const embed = new Discord.MessageEmbed()
            .setColor("0xe17b65")
            .setTitle(`🤗 ${message.author.username} cuddled ${message.mentions.users.first().username}, Awww!`)
            .setImage(body.url)
            .setTimestamp()
            .setFooter("© Fastsrv")
            message.channel.send({embed})
    
    }}