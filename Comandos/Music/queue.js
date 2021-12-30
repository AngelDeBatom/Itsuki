module.exports = {
name: "queue",
aliases: ["q"],
description: "Ver a lista de música que está tocando!",
code: `
<@$authorID>
$description[\`\`\`
Tocando agora: $songInfo[title]
\`\`\`
]
$addField[Lista;
\`\`\`
$if[$queueLength!=0]...$else$queue[1;15]$endif
\`\`\`
]
$color[$getServerVar[embedcolor]]


$onlyIf[$voiceID!=$clientID;<a:nao:926052919483179008> <@$authorID>, você precisa estar conectado no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<a:nao:926052919483179008> <@$authorID>, não possui nenhuma música na queue!]
`
}
