module.exports = {
name: "stop",
aliases: ["st"],
description: "Parar de tocar uma música!",
code: `
$stopSong
$reply[$messageID;⏹️ Parado!;yes]
$onlyIf[$voiceID!=$clientID;<:errado:895110700500934667> » **$username**, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:errado:895110700500934667> » **$username**, não possui nenhuma música na queue!]
`
}