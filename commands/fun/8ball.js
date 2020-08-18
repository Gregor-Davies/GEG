const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    category: "fun",
    description: "Ask the 8 ball!",
    run: async (client, message, args) => { 

if(!args[0]) return message.reply("Please ask a full question");
let replies = [
    'Maybe.',
    'Certainly not mate.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'Pfft.',
    'Sorry, buckaroo.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'Yes!',
    'lol no.',
    'There is a high probability.',
    'What difference does it makes?',
    'Not my problem.',
    'Ask someone else.'
];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

let embed = new Discord.MessageEmbed()
.setTitle("🎱 8Ball")
.setColor("#0xe17b65")
.addField("Q:", question)
.addField("A:", replies[result])
.setTimestamp()
.setFooter("© Fastsrv")


message.channel.send({embed});
    }}