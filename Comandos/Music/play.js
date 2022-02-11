module.exports = [{
name: "tocar",
aliases: ["p"],
description: "Tocar uma música",
code: `
<:success:941365484245352498> <@$authorID>
**$playSong[$noMentionMessage;5m;yes;yes;:x: could not find the song.]** has been added to the queue.
$onlyIf[$message!=;<a:nao:926052919483179008> <@$authorID>, you need the name of the song to find it!]
$onlyIf[$voiceID!=;<a:nao:926052919483179008> <@$authorID>, you're not on a voice channel, join one!]
`
}, {
type: "musicEndCommand",
channel: "$channelID",
code: `
No music played in the last 5 minutes, exiting. 
`
}, {
type: "musicStartCommand",
channel: "$channelID",      
code: `
$suppressErrors[]
$setVar[lastsongplayed;[$songInfo[title]]($songInfo[url])]
$description[<a:disco:941366579042598962> Playing now: [$songInfo[title]]($songInfo[url])]
`
}]
