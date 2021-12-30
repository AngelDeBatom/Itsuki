module.exports = [{
name: "tocar",
aliases: ["p"],
description: "Tocar uma música",
code: `
$suppressErrors[<:incorrect:909966535769092156> <@$authorID>, algo deu errado ao tentar executar o comando.]
<@$authorID>
$thumbnail[$songInfo[thumbnail]]
$description[
**$playSong[$noMentionMessage;3m;yes;yes;<:incorrect:909966535769092156> <@$authorID>, não foi possível encontrar a música.]** foi adicionado a queue!
$onlyIf[$message!=;<:incorrect:909966535769092156> <@$authorID>, é preciso do nome da música para encontrar o som!]
$onlyIf[$voiceID!=;<:incorrect:909966535769092156> <@$authorID>, você não está em um canal de voz, entre em um!]
`
}, {
type: "musicEndCommand",
channel: "$channelID",
code: `
Nenhuma música foi reproduzida nos últimos 5 minutos, saindo. 
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
