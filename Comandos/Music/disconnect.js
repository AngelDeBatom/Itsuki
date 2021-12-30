module.exports = {
name: "disconnect",
aliases: ["dc"],
description: "Desconectar o bot de um canal de voz!",
code: `
$leaveVC
<a:sim:926052904593412106> <@$authorID>, saindo.
$onlyIf[$clientID!=$voiceID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar conectado no mesmo canal de voz que o bt!]	
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar conectado no mesmo canal de voz que o bot!]	
`
}
