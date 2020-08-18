module.exports = {
    name: "help",
    category: "util",
    description: "Thank you everyone ❤",
    run: async (client, message, args) => {

        message.channel.send( {embed: {
            color: 0xe17b65,
            title: `🙋‍♂️ GEG Help...`,
            description: `GEG Bot currently has 13 commands over 3 categories.`,
            fields: [
                {
                    name: "🤗 Fun",
                    value: "`geg fun`",
                },
                {
                    name: "🛠 Utilities",
                    value: "`geg util`",
                },
                {
                    name: "🔍 Search",
                    value: "`geg search`",
                },
                {
                    name: "*TIP:*",
                    value: "*Want to support the bot and us? Donate! paypal.me/fastsrvweb*",
                }             
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "Thank You Everyone ❤",

    }}}
        )}}