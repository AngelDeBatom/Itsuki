module.exports = {
name: "pause",
description: "Pausar uma música!",
code: `
$pauseSong
$reply[$messageID;Pausado;yes]
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
