module.exports = {
    name: "ready",
    execute(client) {
        console.log(`${client.user.tag} has connected to Discord!`);
    },
};