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
$footer[Servidor hospedado no fragmento #$shardID]
$addtimestamp
$color[FFFFFF]
`
}
