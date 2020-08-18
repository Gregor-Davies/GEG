const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: "pat",
        category: "image",
        description: "pat someone.",
        run: async (client, message, args) => {
                if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them!");
                if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.channel.send("UwU!, *Nuzzles your neck*")
                const { body } = await superagent
                .get("https://nekos.life/api/pat");
                
                const embed = new Discord.MessageEmbed()
                .setColor("0xe17b65")
                .setTitle(`🤤 ${message.author.username} patted ${message.mentions.users.first().username}, UwU!`)
                .setImage(body.url)
                .setTimestamp()
                .setFooter("© Fastsrv") 
                message.channel.send({embed})
        
        }}     