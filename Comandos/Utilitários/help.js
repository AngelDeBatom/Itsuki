module.exports = {
name: "help",
aliases: ["commands"],
description: "Informações sobre os comandos!",
code: `
$reply[$messageID;{title:Painel de Ajuda}
{description:
**🧠 General**
**invite \`|\` ping \`|\` botinfo \`|\`afk**
**🎶 Music**
**play \`|\` skip \`|\` queue \`|\` loop \`|\` pause \`|\` stop \`|\` resume \`|\` disconnect `\|\` join**
}
{footer:Servidor hospedado no fragmento #$shardID}
{timestamp:ms}
{color:FFFFFF}
`
}
