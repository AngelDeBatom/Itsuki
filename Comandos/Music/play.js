module.exports = [{
name: "tocar",
aliases: ["p"],
description: "Tocar uma música",
code: `
<:success:941365484245352498> <@$authorID>
**$playSong[$noMentionMessage;5m;yes;yes;:x: Não foi possível reproduzir a música!]** foi adicionado a fila.
$onlyIf[$message!=;<a:nao:926052919483179008> <@$authorID>, é preciso do nome da música para encontrá-la!]
$onlyIf[$voiceID!=;<a:nao:926052919483179008> <@$authorID>, você não está em um canal de voz, entre em um!]
`
}, {
type: "musicEndCommand",
channel: "$channelID",
code: `
Nenhuma música foi reproduzida nos últimos 5 minutos, saindo. 
`
}, {
type: "musicStartCommand",
channel: "$channelID",      
code: `
$suppressErrors[]
$setVar[lastsongplayed;[$songInfo[title]]($songInfo[url])]
$description[<a:disco:941366579042598962> Tocando agora: [$songInfo[title]]($songInfo[url])]
`
}]
