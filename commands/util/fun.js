module.exports = {
    name: "fun",
    category: "util",
    description: "Help for fun based commands",
    run: async (client, message, args) => {

        message.channel.send( {embed: {
            color: 0xe17b65,
            title: `🤗 GEG Help... Fun`,
            description: "All the fun based commands for GEG Bot.\n\n *`geg clap`* - If your happy and you know it, clap your hands! \n*`geg doot`* - Doot! Doot! \n*`geg say`* - Forces geg to say your message\n*`geg pun`* - It's pun-ishment",
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