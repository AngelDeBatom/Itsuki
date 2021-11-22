module.exports = {
name: "loop",
aliases: ["l"],
description: "Ativar o loop de uma música",
code: `
Loop $reply[$messageID;$replaceText[$replaceText[$loopQueue;true;ativado];false;desativado];yes]
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
