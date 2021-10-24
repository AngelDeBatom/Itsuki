module.exports = {
name: "queue",
aliases: ["q"],
description: "Ver a lista de música que está tocando!",
code: `
$reply[
\`\`\`
$queue
\`\`\`
;yes]
$onlyIf[$voiceID!=$clientID;<:errado:895110700500934667> » **$username**, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:errado:895110700500934667> » **$username**, não possui nenhuma música na queue!]
`
}