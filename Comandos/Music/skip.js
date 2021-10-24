module.exports = {
name: "skip",
aliases: ["s"],
description: "Skipar uma música!",
code: `
$skipSong
$reply[$messageID;⏩ Skipado!;yes]
$onlyIf[$queueLength>1;<:errado:895110700500934667> » **$username**, a queue precisa conter mais de ***\`[ 2 ]\`*** sons para dar skip!]
$onlyIf[$voiceID!=$clientID;<:errado:895110700500934667> » **$username**, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:errado:895110700500934667> » **$username**, não possui nenhuma música na queue!]
`
}