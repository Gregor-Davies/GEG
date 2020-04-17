module.exports = {
    name: "clap",
    category: "fun",
    description: "If you are happy and you know it clap your hands...",
    run: async (client, message, args) => {

        message.channel.send( {embed: {
            color: 0xe17b65,
            title: `If you are happy and you know it clap your hands...👏👏`,
            timestamp: new Date(),
            description: args.join(" ").replace(/ +/g, " 👏 "),
            fields: [{
                name: "*TIP:*",
                value: "*Clapping not working? Try clapping more than 1 word!*",
            }],
            footer: {
                icon_url: client.user.avatarURL,
                text: "© Fastsrv",
            }
        }
        })
}}