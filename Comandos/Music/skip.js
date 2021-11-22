module.exports = {
name: "skip",
aliases: ["s"],
description: "Skipar uma música!",
code: `
$skipSong
$reply[$messageID;Skipado!;yes]
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
