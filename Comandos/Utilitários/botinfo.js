module.exports = {
name: "botinfo",
description: "Informações detalhadas sobre o bot!",
code: `

$apiMessage[$channelID;<@$authorID>;
{author:Bot Info:$authorAvatar:}
{color:$getServerVar[embedscolor]}
{description:
Hi **$username**, my name is Rimuru Tempest, I'm 3 years old and I'm a simple bot created in order to have fun and moderate your server.

I've been living in this world since October 5, 2021 to ensure fun and moderation on your server. :D
 **Information**
> 👑 Creator \`$userTag[$botownerid]\`
> 📌 Prefix \`Server: $getServerVar[prefix] || Pattern: r! \`
> 👥 Total users \`$allMembersCount\`
> 💙 Total servers \`$serverCount\`
> 🌍 Language \`$getServerVar[botlanguage]\`
 **Hosting**
> ☁️ Database \`FireBase \`
> ⚡ Host \`Heroku\`
 **Statistics**
> ⏰ Uptime \`$uptime\`
> 🛰️ Ping \`$pingms\`
> 📆 Creation date \`October 5, 2021 (5/10/2021)\`
}
;{actionRow:Invite me,2,5,https\\://discord.com/api/oauth2/authorize?client_id=895106609406160978&permissions=8&scope=bot:Support,2,5,https\\://discord.gg/3WTCz2vpBs};;no]

$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;botinfo;$authorID]\` to use the command again!]
`
}
