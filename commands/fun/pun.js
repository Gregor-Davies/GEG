const { get } = require("snekfetch");

module.exports = {
    name: "pun",
    category: "fun",
    description: "It's Pun-ishment!",
    run: async (client, message, args) => { 
        
        const https = require('https');
        const { text } = https.get("https://getpuns.herokuapp.com/api/random", (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        
        
        //This sends the puns
        message.channel.send( {embed: {
            color: 0xe17b65,
            title: `🥁 Some of these are so bad, It's Pun-ishment!`,
            timestamp: new Date(),
            description: (JSON.parse(data).Pun),
            footer: {
                icon_url: client.user.avatarURL,
                text: "© Fastsrv",
            }



    }
});
       
    



             }
        

        


    )})}}