module.exports = [{
name: "play",
aliases: ["p"],
description: "Tocar uma música",
code: `
<@$authorID>
$thumbnail[$songInfo[thumbnail]]
$description[
**$playSong[$noMentionMessage;2s;yes;yes;<:incorrect:909966535769092156> <@$authorID>, não foi possível encontrar a música.]** foi adicionado a queue!
$suppressErrors[<:incorrect:909966535769092156> <@$authorID>, algo deu errado ao tentar executar o comando.]
$onlyIf[$message!=;<:incorrect:909966535769092156> <@$authorID>, é preciso do nome da música para encontrar o som!]
$onlyIf[$voiceID!=;<:incorrect:909966535769092156> <@$authorID>, você não está em um canal de voz, entre em um!]
`
}, {
type: "musicEndCommand",
channel: "$channelID",
code: `
A queue de música acabou, estou saindo!
`
}] /*{
type: "musicStartCommand",
channel: "$channelID",      
code: `
$suppressErrors[]
Tocando agora: **\`( $songInfo[title] )\`**, pedido por: **$username[$songInfo[userID]]**.
`
}]
*/
