module.exports = {
name: "toptéocoins",
description: "Veja os maiores ostentadores de TéoCoins!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{title:<:grana:895209219287040040> Tabela de classificação do TéoCoins 
$globalUserLeaderboard[téocoins;asc]}
{color:F39A63}
]

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;toptéocoins;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}