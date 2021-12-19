module.exports = {
  name: "ping",
  description: "Saber a latência do bot!",
  code: `
<@$authorID>
⚡ Shard ID \`#$shardID\`
📡 API Latency \`$pingws\`
🤖 BOT Latency \`$botPingws\`

 $djsEval[
 let a = Date.now()
 const ms = require('ms')
 d.object.final = Math.floor(a - d.object.start)
 d.object.owo = ms(a - d.object.start)
 d.object.uwu = ms(d.object.botPing)
 ]
 $createObject[{"start": $dateStamp, "botPing": $botPing}]
`

}

//grande né kk
// Nem sábia que tinha como deixar um comando de ping em "DBD" grande kkskskskskssksk
