const { category } = require("../util/server");
const urban = require('urban');
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    name: "urban",
    category: "search",
    description: "search urban dictionary!",
    run: async (client, message, args) => {
        if(args < 1 || !["random", "search"].includes(args[0])) return message.channel.send("You dumb idiot! You use it like this: `geg urban <search | random> (query)`");
        
        let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
            try {
                search.first(res => {
                    if(!res) return message.channel.send("No results found...");
                    let { word, definition, example, thumbs_up, thumbs_down, permalink, author} = res

                    const embed = new Discord.MessageEmbed()
                    .setColor('0xe17b65')
                    .setAuthor(`Urban Dictionary | ${word}`)
                    .setDescription(`**Defintion:** ${definition || "No definition"}
                    **Example:** ${example || "No example"}
                    **Upvotes:** ${thumbs_up || 0}
                    **Downvotes:** ${thumbs_down || 0}
                    **Link:** [Link to ${word}](${permalink || "https://www.urbandictionary.com/"})`)
                    .setTimestamp()
                    .setFooter(`Written by ${author || "unknown"}`);

                    message.channel.send(embed)
                })
            } catch(e) {
                console.log(e)
                return message.channel.send("Uh Oh Stinky! I broke something...")
            }
    
}}