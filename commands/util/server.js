module.exports = {
    name: "server",
    category: "util",
    description: "Server Info",
    run: async (client, message, args) => {
        
    //message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    message.channel.send( {embed: {
        color: 0xe17b65,
        title: `📝 Server Info`,
        timestamp: new Date(),
        description: (`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`),
        footer: {
            icon_url: client.user.avatarURL,
            text: "© Fastsrv",
        }
      

    }})}}