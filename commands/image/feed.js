const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "feed",
    category: "image",
    description: "feed someone.",
    run: async (client, message, args) => {
            if (!message.mentions.users.first()) return message.reply("You need to mention someone to feed them!");
            if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.channel.send("I don't eat though :(")
            const { body } = await superagent
            .get("https://nekos.life/api/v2/img/feed");
            
            const embed = new Discord.MessageEmbed()
            .setColor("0xe17b65")
            .setTitle(`🥐 ${message.author.username} fed ${message.mentions.users.first().username}!`)
            .setImage(body.url)
            .setTimestamp()
            .setFooter("© Fastsrv")
            message.channel.send({embed})
    
    }}