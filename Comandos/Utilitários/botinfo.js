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
 **$getServerVar[botinfoinformation]**
> 👑 $getServerVar[botinfocreator] \`$userTag[$botownerid]\`
> 📌 $getServerVar[botinfoprefix] \`$getServerVar[botinfoprefixa] $getServerVar[prefix] || $getServerVar[botinfoprefixb] d. \`
> 👥 $getServerVar[botinfousers]\`$allMembersCount\`
> 💙 $getServerVar[botinfoguilds] \`$serverCount\`
> 🌍 $getServerVar[botinfolanguage] \`$getServerVar[botlanguage]\`
 **$getServerVar[botinfostatistics]**
> ⏰ $getServerVar[botinfouptime] \`$uptime\`
> 🛰️ $getServerVar[botinfoping] \`$pingms\`
> 📆 $getServerVar[botinfocreationdate] \`$getServerVar[botinfocreationdatea]\`
}
;{actionRow:Invite me,2,5,https\\://discord.com/api/oauth2/authorize?client_id=895106609406160978&permissions=8&scope=bot:Support,2,5,https\\://discord.gg/3WTCz2vpBs};;no]

$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;botinfo;$authorID]\` to use the command again!]
`
}
