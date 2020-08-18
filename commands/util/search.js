module.exports = {
    name: "search",
    category: "util",
    description: "Search commands",
    run: async (client, message, args) => {

        message.channel.send( {embed: {
            color: 0xe17b65,
            title: `🔍 GEG Help... Search`,
            description: "All the search based commands for GEG Bot.\n\n*`geg urban <search | random> (Query)`* - Searchs Urban Dictionary for your query.",
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

    }}})}}