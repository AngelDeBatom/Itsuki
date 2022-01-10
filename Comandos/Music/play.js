module.exports = [{
name: "tocar",
aliases: ["p"],
description: "Tocar uma música",
code: `
<@$authorID>
**$playSong[$noMentionMessage;5m;yes;yes;]** foi adicionado a fila!
$color[$getServerVar[embedcolor]]
$onlyIf[$message!=;<a:nao:926052919483179008> <@$authorID>, é preciso do nome da música para encontrá-la!]
$onlyIf[$voiceID!=;<a:nao:926052919483179008> <@$authorID>, você não está em um canal de voz, entre em um!]
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
