module.exports = {
    name: "doot",
    category: "fun",
    description: "Spooky scary skeletons send shivers down your spine...",
    run: async (client, message, args) => {

        message.channel.send( {embed: {
            color: 0xe17b65,
            title: `Doot! Doot! 🎺`,
            timestamp: new Date(),
            description: args.join(" ").replace(/ +/g, " 💀🎺 "),
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