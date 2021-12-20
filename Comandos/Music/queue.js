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
$addField[Queue 1-30;
\`\`\`
$queue[1;30;{number}. {title} por {username}]
\`\`\`
;yes]
$addField[Queue 30-60;
\`\`\`
...
\`\`\`
;yes]


$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
