const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: "neko",
        category: "image",
        description: "nekos",
        run: async (client, message, args) => {
            const { body } = await superagent
            .get("https://nekos.life/api/v2/img/neko");
    
            const embed = new Discord.MessageEmbed()
            .setColor("#0xe17b65")
            .setTitle(`🐱 Nekos`)
            .setImage(body.url)
            .setTimestamp()
            .setFooter("© Fastsrv")
            message.channel.send({embed})
        
        
        }}     