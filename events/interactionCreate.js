module.exports = {
    name: "interactionCreate",
    once: true,
    execute(interaction) {
        console.log(`${interaction.user.tag} triggered an interaction in ${interaction.channel.name}`);
    },
};