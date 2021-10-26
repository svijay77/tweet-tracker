const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = { data: new SlashCommandBuilder().setName("hello").setDescription("Replies Hello with the user information"), async execute(interaction) {
    await interaction.reply(`Hello ${interaction.user.tag}`);
    },
};