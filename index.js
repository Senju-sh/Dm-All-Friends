const fetch = require('node-fetch');
const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const config = require('./config.json')
console.log("https://senju.cc/")
client.on('ready', async () => {
    let i = 1
    console.log("DM ALL DÉMARRÉ")
    for (const friend of client.relationships.friendCache.map(r => r)) {
        try {
            await friend.send(config.msg.replaceAll('{user}', friend))
            console.log(`${friend.globalName || friend.username} : DM RÉUSSI | ${i}`);
            await client.sleep(100)
            i++
        } catch { console.log(`${friend.globalName || friend.username} : DM ÉCHOUÉ`) }
    }
    console.log("DM TERMINÉ")
}).login(config.token);
async function errorHandler(error) {
    if (error.code === 0) return;
    if (error.code === 400) return;
    console.log(`[ERROR] ${error}`);
};
process.on("unhandledRejection", errorHandler);
process.on("uncaughtException", errorHandler);
