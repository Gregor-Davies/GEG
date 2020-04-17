const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");

// Disables the bot from tagging @everyone
const client = new Client({
    disableEveryone: true
});

//collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

//run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

//if the bot is online this will be executed
client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`)

    //Set the user presence
client.user.setPresence({
    status: "online",
    activity: {
        name: "All rise for Pope GEG",
        type: "WATCHING"
        }
    });
})

//when a message comes in...
client.on("message", async message => {
    const prefix = "geg ";

    //prefix listener
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

// If message.member is uncached, cache it
if (!message.member) message.member = await message.guild.fetchMember(message);
    
    //Removes the prefix
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    //get the command
    let command = client.commands.get(cmd);
    //if none are found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    //if the command is finally found, run the command
    if (command)
    command.run(client, message, args);
    
});

//Login in the bot
client.login(process.env.TOKEN);