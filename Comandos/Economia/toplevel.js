module.exports = {
name: "toplevel",
aliases: ["toplvl"],
description: "Veja os maiores leveis da cidade!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{title:<:mongodb:895524206291325008> Tabela de classificação de Level 
$globalUserLeaderboard[lvl;asc]}
{color:F39A63}
]

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;toplevel;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}