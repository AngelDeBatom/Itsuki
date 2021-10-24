module.exports = {
name: "toppaypal",
description: "Veja os mais ricos da cidade!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{title:<:paypal:895205813185052702> Tabela de classificação do Paypal 
$globalUserLeaderboard[paypal;asc;]}
{color:F39A63}
]

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;toppaypal;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}