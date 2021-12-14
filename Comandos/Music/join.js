module.exports = {
name: "join",
aliases: ["j"],
description: "Conectar o bot a um canal de voz!",
code: `
<@$authorID>, entrei no canal de voz **$channelName[$voiceID]**
$joinVC
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
