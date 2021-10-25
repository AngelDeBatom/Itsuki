module.exports = {
name: "disconnect",
aliases: ["dc"],
description: "Desconectar o bot de um canal de voz!",
code: `
$leaveVC
$addReactions[👋]
$reply[$messageID;Saindo!;yes]
$onlyIf[$voiceID!=$clientID;<:errado:895110700500934667> » **$username**, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:errado:895110700500934667> » **$username**, não possui nenhuma música na queue!]
`
}