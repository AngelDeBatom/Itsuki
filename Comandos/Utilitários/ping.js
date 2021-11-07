module.exports = {
  name: "ping",
  description: "Saber a latência do bot!",
  code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
<@$authorID>
⚡ Shard ID \`#$shardID\`
📡 API Latency \`$pingms\`
🤖 BOT Latency \`$botPingms\`

 $djsEval[
 let a = Date.now()
 const ms = require('ms')
 d.object.final = Math.floor(a - d.object.start)
 d.object.owo = ms(a - d.object.start)
 d.object.uwu = ms(d.object.botPing)
 ]
 $createObject[{"start": $dateStamp, "botPing": $botPing}]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;ping;$authorID]\` to use the command again!]
`

}

//grande né kk
// Nem sábia que tinha como deixar um comando de ping em "DBD" grande kkskskskskssksk
