module.exports = {
name: "roubar",
aliases: ["rob"],
description: "Roube o dinheiro de alguém!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$sendDM[$findUser[$message];{title:Roubado}{description:**$username**, você acabou sendo roubado e teve uma perda de: ***\`[ $sub[$getGlobalUserVar[téocoins;$mentioned[1]];$random[0;750]] ]\`***, o autor do crime foi **$userTag[$authorID]**, no servidor **$serverName**!}{color:F39A63}]
$setGlobalUserVar[zenitsucoins;$sum[$getGlobalUserVar[téocoins;$authorID];$random[0;750]];$authorID]
$setGlobalUserVar[zenitsucoins;$sub[$getGlobalUserVar[téocoins;$mentioned[1]];$random[0;750]];$mentioned[1]]
$color[F39A63]
$thumbnail[$userAvatar[$authorID]]
$title[$username roubou $username[$mentioned[1]]]
$description[
$addField[$username;
***\`[ $random[0;750] TéoCoins ]\`***
***\`[ $random[50;75] XP ]\`***
Total: ***\`[ $sum[$getGlobalUserVar[téocoins;$authorID];$random[0;750]] TéoCoins ]\`***
]
$addField[$username[$mentioned[1]];
Total: ***\`[ $sub[$getGlobalUserVar[téocoins;$mentioned[1]];$random[0;750]] TéoCoins e $sub[$getGlobalUserVar[xp;$mentioned[1]];$random[50;75]] XP ]\`***
]]
$globalCooldown[6h;$getServerVar[emojie] » **$username**, aguarde **\`[ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[6h;globalUser;roubar;$authorID];minutes;Minutos];seconds;Segundos];hours;Horas];and;e];second;Segundo] ]\`** para roubar alguém novamente!]
$onlyIf[$getGlobalUserVar[zenitsucoins;$authorID]>=750;$getServerVar[emojie] » **$username**, você precisa conter pelo menos ***\`[ 750 TéoCoins ]\`***.]
$onlyIf[$getGlobalUserVar[xp;$authorID]>=75;$getServerVar[emojie] » **$username**, você precisa conter pelo menos ***\`[ 75 XP ]\`*** para roubar alguém!]
$onlyIf[$getGlobalUserVar[xp;$mentioned[1]]>=25;$getServerVar[emojie] » **$username**, ele precisa conter pelo menos ***\`[ 25 XP ]\`***!]
$onlyIf[$getGlobalUserVar[zenitsucoins;$mentioned[1]]>=750;$getServerVar[emojie] » **$username**, ele dever conter pelo menos ***\`[ 750 TéoCoins ]\`*** na carteira!]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;$getServerVar[emojie] » **$username**, você não pode roubar bots de discord!]
$onlyIf[$mentioned[1]!=$authorID;$getServerVar[emojie] » **$username**, você não pode roubar a si mesmo!]
$onlyIf[$mentioned[1]!=;$getServerVar[emojie] » **$username**, mencione alguém para roubar!]
$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao tentar executar o comando!]
`
}
