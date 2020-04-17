module.exports = {
    name: "ping",
    category: "util",
    description: "Returns your latency to discord and the discord api",
    run: async (client, message, args) => {
        //ping command
        message.channel.send({embed: {
            color:  0xe17b65,
            description: `Latency is ${Math.floor(message.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(client.ws.ping)}ms`,
            title: "🏓 Pong!",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Fastsrv",
            }
          }});
        }
    }
