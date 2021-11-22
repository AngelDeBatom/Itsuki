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
> 👑 Criador \`$userTag[$botownerid]\`
> 📌 Prefixo \`$getServerVar[botinfoprefixa] $getServerVar[prefix] || $getServerVar[botinfoprefixb] d. \`
> 👥 Usuários \`$allMembersCount\`
> 💙 Guildas \`$serverCount\`
 **Estatísticas**
> ⏰ Uptime \`$uptime\`
> 🛰️ Ping \`$pingms\`
> 📆 Data de criação \`5 de outubro de 2021 (5.10.2021)\`
}
;{actionRow:Convide-me,2,5,https\\://discord.com/api/oauth2/authorize?client_id=895106609406160978&permissions=8&scope=bot:Suporte,2,5,https\\://discord.gg/};;no]
`
}
