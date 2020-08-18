
const { get } = require('snekfetch');


module.exports = {
    name: "owo",
    category: "image",
    description: "Owo what's this?",
    run: async (client, message, args) => { 
 

    const { body } = await get("https://rra.ram.moe/i/r?type=owo");

        message.channel.send( {embed: {
            color: 0xe17b65,
            title: ` 😊 OwO`,
            timestamp: new Date(),
            image: {
                url: `https://cdn.ram.moe/${body.path.replace("/i/", "")}`,
            },
            url: `https://cdn.ram.moe/${body.path.replace("/i/", "")}`,
            description: "*Image not loading? Just cwlick the OwO*",
            footer: {
                icon_url: client.user.avatarURL,
                text: "© Fastsrv",
            }



                }

              })
      
      

        }
        }
    ;

  

