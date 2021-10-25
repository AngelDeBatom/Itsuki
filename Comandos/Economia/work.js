module.exports = {
name: "work",
aliases: ["trabalhar","w"],
description: "Vá trabalhar para sustentar sua familia!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$setGlobalUserVar[paypal;$sum[$getGlobalUserVar[paypal;$authorID];$multi[$random[1;15];3]];$authorID]

$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID];$multi[$random[5;10];3]];$authorID]

$setGlobalUserVar[gasolina;$sub[$getGlobalUserVar[gasolina;$authorID];$random[1;2]];$authorID]

$reply[$messageID;{author:Work:$authoravatar}{description:<:correto:895110679495839785> » **$username**, você fez um total de ***\`[ $random[1;15] Entrega(s) ]\`*** e obteve um lucro de: ***\`[ $multi[$random[1;15];3] TéoCoins e $multi[$random[5;10];3] XP ]\`***.
}{color:F39A63}]
$globalCooldown[5m;<:errado:895110700500934667> » **$username**, aguarde ***\`[ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[5m;globalUser;work;$authorID];seconds;Segundos];minutes;Minutos];and;e];hours;Horas];hour;hora];minute;Minuto];second;Segundo] ]\`*** para trabalhar novamente!]
$onlyIf[$getGlobalUserVar[gasolina;$authorID]>=11;<:errado:895110700500934667> » **$username**, a gasolina está em uma situação crítica, reabasteça para que no meio do caminho não aconteça nenhum incidente. ]

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando!]
`
}