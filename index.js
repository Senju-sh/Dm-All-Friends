const { Client } = require('vainty.js');
const s = require("./config.json");
const c = new Client({
   http: {
      headers: {
         "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9226 Chrome/138.0.7204.251 Electron/37.6.0 Safari/537.36"
      }
   },
   ws: {
      presence: {
         status: 'dnd',
         afk: false
      }
   }
});

c.on('ready', async () => {
   let d = Date.now()
   let n = 0;
   console.log(`[+] DM started - Estimated time is ${Math.floor((c.user.friends.size * 25000) / 60000)} min(s) and ${Math.floor(((c.user.friends.size * 25000) % 60000) / 1000)} second(s)`);
   for (const f of c.user.friends.map(r => r)) {
      try {
         await f.send(s.txt.replaceAll("{user}", `<@${f.id}>`)).then(() => console.log(`[${++n}] - ${f.username} - DM SUCCESS`)).catch(() => console.log(`[${++n}] - ${f.username} - DM FAIL`));
         await c.sleep(25000);
      } catch (e) {
         console.log(e);
      }
   }
   console.log(`[+] DM finished in ${Math.floor((Date.now() - d) / 60000)} min(s) and ${Math.floor(((Date.now() - d) % 60000) / 1000)} second(s)`);
});

c.login(s.token);