module.exports = {
name: "roubar",
aliases: ["rob"],
description: "Roube o dinheiro de alguém!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$sendDM[$findUser[$message];{title:Roubado}{description:**$username**, você acabou sendo roubado e teve uma perda de: ***\`[ $sub[$getGlobalUserVar[téocoins;$mentioned[1]];$random[0;750]] ]\`***, o autor do crime foi **$userTag[$authorID]**, no servidor **$serverName**!}{color:F39A63}]
$setGlobalUserVar[téocoins;$sum[$getGlobalUserVar[téocoins;$authorID];$random[0;750]];$authorID]
$setGlobalUserVar[téocoins;$sub[$getGlobalUserVar[téocoins;$mentioned[1]];$random[0;750]];$mentioned[1]]
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
$onlyIf[$getGlobalUserVar[téocoins;$authorID]>=750;<:errado:895110700500934667> » **$username**, você precisa conter pelo menos ***\`[ 750 TéoCoins ]\`***.]
$onlyIf[$getGlobalUserVar[xp;$authorID]>=75;<:errado:895110700500934667> » **$username**, você precisa conter pelo menos ***\`[ 75 XP ]\`*** para roubar alguém!]
$onlyIf[$getGlobalUserVar[xp;$mentioned[1]]>=25;<:errado:895110700500934667> » **$username**, ele precisa conter pelo menos ***\`[ 25 XP ]\`***!]
$onlyIf[$getGlobalUserVar[téocoins;$mentioned[1]]>=750;<:errado:895110700500934667> » **$username**, ele dever conter pelo menos ***\`[ 750 TéoCoins ]\`*** na carteira!]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;<:errado:895110700500934667> » **$username**, você não pode roubar bots de discord!]
$onlyIf[$mentioned[1]!=$authorID;<:errado:895110700500934667> » **$username**, você não pode roubar a si mesmo!]
$onlyIf[$mentioned[1]!=;<:errado:895110700500934667> » **$username**, mencione alguém para roubar!]

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
$onlyforids[$getServerVar[devs];Manutenção]`
}