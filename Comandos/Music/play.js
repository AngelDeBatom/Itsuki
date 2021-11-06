module.exports = [{
name: "play",
aliases: ["p"],
description: "Tocar uma música",
code: `
$if[$queueLength<=1]
**\`( $playSong[$noMentionMessage;5m;yes;yes;<:errado:895110700500934667> » **$username**, não foi possível encontrar a música!] )\`** foi adicionado a queue!
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao tentar executar o comando!]
$onlyIf[$message!=;<:errado:895110700500934667> » **$username**, eu preciso do nome da música para encontrar um som!]
$onlyIf[$voiceID!=;<:errado:895110700500934667> » **$username**, você não está em um canal de voz, entre em um!]
$elseif[$queueLength>=2]
**\`( $playSong[$noMentionMessage;5m;yes;yes;<:errado:895110700500934667> » **$username**, não foi possível encontrar a música!] )\`** foi adicionado a queue!
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao tentat executar o comando!]
$onlyIf[$message!=;<:errado:895110700500934667> » **$username**, eu preciso do nome da música para encontrar um som!]
$onlyIf[$voiceID!=;<:errado:895110700500934667> » **$username**, você não está em um canal de voz, entre em um!]
$onlyIf[$voiceID==$clientID;<:errado:895110700500934667> » **$username**, você precisa estar no mesmo canal de voz que o bot!]
$endelseif
$endif
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
$if[$queueLength<=1]
$addCmdReactions[🎶]
$suppressErrors[]
$elseif[$queueLength>=2]
Tocando agora: **\`( $songInfo[title] )\`**, pedido por: **$username[$songInfo[userID]]**.
$endelseif
$endif
`
}]
