module.exports = {
name: "stop",
aliases: ["st"],
description: "Parar de tocar uma música!",
code: `
$stopSong
$reply[$messageID;Parado!;yes]
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
