module.exports = {
name: "resume",
aliases: ["r"],
description: "Resumir o som!",
code: `
$resumeSong
$reply[$messageID;▶️ Resumido!;yes]
$onlyIf[$voiceID!=$clientID;<:errado:895110700500934667> » **$username**, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:errado:895110700500934667> » **$username**, não possui nenhuma música na queue!]
`
}