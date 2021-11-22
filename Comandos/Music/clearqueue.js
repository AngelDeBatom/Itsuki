module.exports = {
name: "clearqueue",
description: "Limpar a queue",
code: `
$clearSongQueue
$stopSong
$reply[$messageID;<:correto:895110679495839785> » **$username**, a queue foi limpa!;yes]
$onlyIf[$voiceID!=$clientID;<:errado:895110700500934667> » **$username**, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:errado:895110700500934667> » **$username**, não possui nenhuma música na queue!]
$onlyForIDs[$botownerid;]
`
}
