module.exports = {
name: "disconnect",
aliases: ["dc","leavevc"],
description: "Desconectar o bot de um canal de voz!",
code: `
$suppressErrors[]
$leaveVC[$voiceID]
$addCmdReactions[👍]
<:success:941365484245352498> <@$authorID>, leaving.
$onlyIf[$clientID!=$voiceID;<:incorrect:909966535769092156> <@$authorID>, you need to be connected to the same voice channel as the bot!]	
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, you need to be connected to the same voice channel as the bot!]	
`
}
