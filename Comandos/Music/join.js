module.exports = {
name: "join",
aliases: ["j"],
description: "Conectar o bot a um canal de voz!",
code: `
$suppressErrors[]
$joinVC
<:correct:910318012945559594> <@$authorID>, joing.
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, you need to be on the same voice channel as the bot!]	
`
}
