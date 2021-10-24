module.exports = {
name: "loop",
aliases: ["l"],
description: "Ativar o loop de uma música",
code: `
$loopSong
$reply[$messageID;$replaceText[$replaceText[$loopQueue;true;🔄 Loop ativado!];false;🔄 Loop desativado!];yes]
$onlyIf[$voiceID!=$clientID;<:errado:895110700500934667> » **$username**, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:errado:895110700500934667> » **$username**, não possui nenhuma música na queue!]
`
}