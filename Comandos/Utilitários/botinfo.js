module.exports = {
name: "botinfo",
description: "Informações detalhadas sobre o bot!",
code: `

$apiMessage[$channelID;;
{author:Bot Info:$authorAvatar:}
{color:$getServerVar[embedscolor]}
{description:
Hi **$username**, my name is Rimuru Tempest, I'm 3 years old and I'm a simple bot created in order to have fun and moderate your server.

I've been living in this world since October 5, 2021 to ensure fun and moderation on your server. :D
 **Information**
> 👑 Criadores \`$userTag[$botownerid]\`
> 📌 Prefixo: \`Servidor: $getServerVar[prefix] || Padrão: r_ \`
> 👥 Total de usuários \`$allMembersCount\`
> 💙 Total de servidores que estou: \`$serverCount\`
 **Hosting**
> ☁️ Database \`FireBase )\`
> ⚡ Host \`Heroku\`
 **Statistics**
> ⏰ Uptime \`$uptime\`
> 🛰️ Ping \`$pingms\`
> 📆 Data de criação: **\`( 5 de outubro de 2021 (5/10/2021) )\`**
}
;{actionRow:Me Adicione,2,5,https\\://discord.com/api/oauth2/authorize?client_id=895106609406160978&permissions=8&scope=bot:Suporte,2,5,https\\://discord.gg/3WTCz2vpBs};;no]

$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;botinfo;$authorID]\` to use the command again!]
`
}
