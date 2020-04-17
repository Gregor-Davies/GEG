module.exports = {
    name: "say",
    category: "fun",
    description: "Forces the bot to say what you want it to say",
    run: async (client, message, args) => {
                //checks if the message can be deleted
                if (message.deletable) message.delete();

                if (args.length < 0) 
                    message.channel.send({
                        color: 0xe17b65,
                        title: `...Speak my child`,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "© Fastsrv",
                        }
                    })
        
            if (args[0])
                message.channel.send({embed: {
                    color: 0xe17b65,
                    description: args.join(" "),
                    title: `🔫  Someone at gunpoint has forced GEG to say...`,
                    timestamp: new Date(),
                    fields: [{
                        name: "*TIP:*",
                        value: "*Want to force GEG to say something? Try `geg say.`*"
                    }],
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: "© Fastsrv",
                    }
    }
})}}