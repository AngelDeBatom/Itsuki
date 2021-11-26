module.exports = {
name: "queue",
aliases: ["q"],
description: "Ver a lista de música que está tocando!",
code: `
$reply[$messageID;
**Tocando agora:** [$songInfo[title]]($songInfo[url]) próximo som **$songInfo[title;l]**
\`\`\`
$queue[1;30;**{number}.** {title} por {username}]
\`\`\`
;yes]
$onlyIf[$voiceID!=$clientID;<:incorrect:909966535769092156> <@$authorID>, você precisa estar no mesmo canal de voz que o bot!]	
$onlyIf[$queueLength!=0;<:incorrect:909966535769092156> <@$authorID>, não possui nenhuma música na queue!]
`
}
