module.exports = {
name: "queue",
aliases: ["q"],
description: "Ver a lista de música que está tocando!",
code: `
<@$authorID>
$description[\`\`\`
Tocando agora: $songInfo[title]

$queue[1;30;**{number}.** {title} por {username}]
\`\`\`
]
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
