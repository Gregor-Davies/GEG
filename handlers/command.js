const { readdirSync } = require("fs");

const ascii = require("ascii-table");

//Create a new ASCII table
let table = new ascii("Commands");
table.setHeading("Command", "Load status");

module.exports = (client) => {
    //read every commands subfolder
    readdirSync("./commands/").forEach(dir => {
        //Filter so it only reads javascript files
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));


        //filter all the commands and add them to the collection
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);

        if (pull.name) {
            client.commands.set(pull.name, pull);
            table.addRow(file, '✅');
        } else {
            table.addRow(file, `❌ -> missing help.name, or help.name is not a string.`);
            continue;
        }
        //if there is a aliases key, read the aliaseses
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
    })};
    //log the table
    console.log(table.toString());

/**
 * This is the basic command layout
 * module.exports = {
 *  name: "Command name",
 *  aliases: ["array", "of", "aliases"]
 *  category: "Category name",
 *  description: "Command description"
 *  usage: "[args input]",
 *  run: (client, message, args) => {
 *      The code in here to execute
 *  }
 * }
 */