module.exports = {
name: "botinfo",
description: "Informações detalhadas sobre o bot!",
code: `

$apiMessage[$channelID;<@$authorID>;
{author:Bot Info:$authorAvatar:}
{color:FFFFFF}
{description:
Olá **$username**, aqui estão algumas informações sobre mim.

 **Informações**
> 👑 Criadores \`$userTag[$botownerid]\` & \`$userTag[933559392786350091]\`
> 📌 Prefixo \`Guilda: $getServerVar[prefix] || Padrão: . \`
> 👥 Usuários \`$allMembersCount\`
> 💙 Guildas \`$serverCount\`
 **Estatísticas**
> ⏰ Uptime \`$uptime\`
> 🛰️ Ping \`$pingms\`
> 📆 Data de criação \`5 de fevereiro de 2022 (5.2.2022)\`
}
;{actionRow:Convide-me,2,5,https\\://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot:Suporte,2,5,https\\://discord.gg/wNCr4BTrZv};;no]
`
}
