module.exports = {
name: "join",
aliases: ["j"],
description: "Conectar o bot a um canal de voz!",
code: `
$joinVC
<:correct:910318012945559594> <@$authorID>, entrando.
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
`
}
