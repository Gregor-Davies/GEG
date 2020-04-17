module.exports = {
    name: "vaporwave",
    category: "fun",
    description: " I  h o p e  y o u  l i k e  t a l k i n g  l i k e  t h i s.",
    run: async (client, message, args) => {
      message.channel.send( {embed: {
        color: 0xe17b65,
        title: `Doot! Doot! 🎺`,
        timestamp: new Date(),
        description: string.split('').join(' '),
        fields: [{
            name: "*TIP:*",
            value: "*Doot not working? Try dooting more than 1 word!*",
        }],
        footer: {
            icon_url: client.user.avatarURL,
            text: "© Fastsrv",
        }
    }
    })
}}