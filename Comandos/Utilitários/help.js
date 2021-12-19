module.exports = {
name: "help",
aliases: ["commands"],
description: "Informações sobre os comandos!",
code: `
<@$authorID>
$title[Painel de Ajuda]
$description[
**🧠 General**
**invite \`|\` ping \`|\` botinfo \`|\`afk**
**🎶 Music**
**play \`|\` skip \`|\` queue \`|\` loop \`|\` pause \`|\` stop \`|\` resume \`|\` disconnect `\|\` join**
]
$footer[Servidor hospedado no fragmento #$replaceText[$shardID;0;0 \`(Cyborg\`)]]
$addtimestamp
$color[FFFFFF]
`
}
