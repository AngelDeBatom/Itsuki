module.exports = {
name: "help",
aliases: ["commands"],
description: "Informações sobre os comandos!",
code: `
<@$authorID>
$title[Help Panel]
$description[
]
$addField[🧠 General;
**invite \`|\` ping \`|\` botinfo \`|\`afk**
]
$addField[🎶 Music;
**play \`|\` skip \`|\` queue \`|\` loop \`|\` pause \`|\` stop \`|\` resume \`|\` disconnect**
]
$footer[Servidor hospedado no fragmento #$shardID]
$addTimestamp
$color[FFFFFF]
`
}
