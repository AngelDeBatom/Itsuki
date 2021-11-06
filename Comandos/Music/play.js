module.exports = [{
name: "play",
aliases: ["p"],
description: "Tocar uma música",
code: `
**\`( $playSong[$noMentionMessage;5m;yes;yes;<:errado:895110700500934667> » **$username**, não foi possível encontrar a música!] )\`** foi adicionado a queue!
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao tentar executar o comando!]
$onlyIf[$message!=;<:errado:895110700500934667> » **$username**, eu preciso do nome da música para encontrar um som!]
$onlyIf[$voiceID!=;<:errado:895110700500934667> » **$username**, você não está em um canal de voz, entre em um!]
`
}, {
type: "musicEndCommand",
channel: "$channelID",
code: `
A queue de música acabou, estou saindo!
`
}, {
type: "musicStartCommand",
channel: "$channelID",      
code: `
$suppressErrors[]
Tocando agora: **\`( $songInfo[title] )\`**, pedido por: **$username[$songInfo[userID]]**.
`
}]
