module.exports = {
name: "disconnect",
aliases: ["dc"],
description: "Desconectar o bot de um canal de voz!",
code: `
$leaveVC
<@$authorID>, saindo.
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
`
}
