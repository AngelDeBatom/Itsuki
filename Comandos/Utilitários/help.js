module.exports = {
name: "help",
aliases: ["comandos"],
code: `
<@$authorID>
$title[Painel de Ajuda]
$description[
**🧠 Utilitários**
**invite \`|\` ping \`|\` botinfo \`|\`afk**
**🎶 Música**
**tocar \`|\` skip \`|\` queue \`|\` loop \`|\` pause \`|\` stop \`|\` resume \`|\` disconnect \`|\` join**
]
$footer[Servidor hospedado no fragmento #$shardID]
$addtimestamp
$color[$getServerVar[embedcolor]]
`
}
