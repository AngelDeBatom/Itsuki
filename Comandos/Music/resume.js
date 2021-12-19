module.exports = {
name: "resume",
aliases: ["r"],
description: "Resumir o som!",
code: `
$resumeSong
<:correct:910318012945559594> <@$authorID>, resumido.
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
