const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => { console.log("Bot Connected!"); });

client.on("interactionCreate", async interaction => {
	if (!interaction.isCommand()) return;
    const { commandName } = interaction;

    if (commandName == "hello") {
        await interaction.reply("Hello " + interaction.user.tag + "!");
    }
});

client.login(token);