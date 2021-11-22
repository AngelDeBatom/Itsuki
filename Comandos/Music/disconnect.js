module.exports = {
name: "disconnect",
aliases: ["dc"],
description: "Desconectar o bot de um canal de voz!",
code: `
$leaveVC
$reply[$messageID;Saindo!;yes]
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
