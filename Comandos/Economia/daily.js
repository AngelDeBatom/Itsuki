module.exports = {
name: "daily",
aliases: ["diário"],
description: "Pegue seu daily!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$setGlobalUserVar[paypal;$sum[$getGlobalUserVar[paypal;$authorID];$random[50;250]];$authorID]

$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID];$random[25;225]];$authorID]

$reply[$messageID;
{author:Recompensa Diária:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, na sua recompensa diária você obteve um lucro de: ***\`[ $random[50;250] TéoCoins e $random[25;225] XP ]\`***}
{color:F39A63}
;yes]

$globalCooldown[12h;$getServerVar[emojie] » **$username**, aguarde *\`[ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[12h;globalUser;daily;$authorID];minutes;Minutos];seconds;Segundos];hours;Horas];and;e];second;Segundo] ]\`** para coletar sua recompensa diária novamente!]

$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao tentar executar o comando!]
`
}
