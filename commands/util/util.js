module.exports = {
    name: "util",
    category: "util",
    description: "Help for util based commands",
    run: async (client, message, args) => {

        message.channel.send( {embed: {
            color: 0xe17b65,
            title: `🛠 GEG Help... Utilities`,
            description: "All the utility based commands for GEG Bot.\n\n *`geg help`* - Displays the help menu\n*`geg util`* - You're already here!\n*`geg fun`* - Shows the fun commands.\n*`geg ping`* - Pong! Shows your latency to Discords servers.\n*`geg avatar`* - Get your or someone elses avatar.\n*`geg server`* - Get server info.\n*`geg search`* - See all of GEG's search commands. ",
            fields: [

                {
                    name: "*TIP:*",
                    value: "Want to view GEG Bots other commands? Try *`geg help`*!",
                }             
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "© Fastsrv",

    }}}
        )}}