module.exports = {
name: "botinfo",
description: "Informações detalhadas sobre o bot!",
code: `

$apiMessage[$channelID;<@$authorID>;
{author:Bot Info:$authorAvatar:}
{color:$getServerVar[embedscolor]}
{description:
$getServerVar[botinfohowdy] **$username**, $getServerVar[botinfoblabla].

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
;{actionRow:$getServerVar[botinfoinviteme],2,5,https\\://discord.com/api/oauth2/authorize?client_id=895106609406160978&permissions=8&scope=bot:$getServerVar[botinfosupport],2,5,https\\://discord.gg/3WTCz2vpBs};;no]

$globalCooldown[5s;$getServerVar[emojie] <@$authorID>, $getServerVar[cooldownmsg]]
`
}
