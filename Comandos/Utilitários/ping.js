module.exports = {
  name: "ping",
  aliases: ['pingar', 'ms'],
  description: "Saber a latência do bot!",
  code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
📡 Latência da API ***\`[ $pingms ]\`***\n<:nada:895112926678097930>╰ Tempo de resposta ***\`[ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getObjectProperty[owo];0;];1;];2;];3;];4;];5;];6;];7;];8;];9;].;ms.;00.];s.;]$replaceText[$replaceText[$replaceText[$checkCondition[$charCount[$replaceText[$replaceText[$getObjectProperty[owo];m;];s;]]==1]$checkCondition[$charCount[$replaceText[$replaceText[$getObjectProperty[owo];m;];s;]]==2]$checkCondition[$charCount[$replaceText[$replaceText[$getObjectProperty[owo];m;];s;]]>2];truefalsefalse;00];falsetruefalse;0];falsefalsetrue;]$replaceText[$replaceText[$getObjectProperty[owo];m;];s;] Segundos ]\`***
🤖 Latência do Bot ***\`[ $botPingms ]\`***
<:database_1:833121738861969439> Latência da Database ***\`[ $dbPingms ]\`***
;yes]
 $djsEval[
 let a = Date.now()
 const ms = require('ms')
 d.object.final = Math.floor(a - d.object.start)
 d.object.owo = ms(a - d.object.start)
 d.object.uwu = ms(d.object.botPing)
 ]
 $createObject[{"start": $dateStamp, "botPing": $botPing}]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;ping;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`

}

//grande né kk
// Nem sábia que tinha como deixar um comando de ping em "DBD" grande kkskskskskssksk