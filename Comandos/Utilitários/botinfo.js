module.exports = {
name: "botinfo",
description: "Informações detalhadas sobre o bot!",
code: `

$apiMessage[$channelID;<@$authorID>;
{author:Bot Info:$authorAvatar:}
{color:FFFFFF}
{description:
Hi **$username**, here is some information about me.

 **Information**
> 👑 Creators \`$userTag[$botownerid]\` & \`$userTag[933559392786350091]\`
> 📌 Prefix \`Guild: $getServerVar[prefix] || Standard: r! \`
> 👥 Users \`$allMembersCount\`
> 💙 Guilds \`$serverCount\`
 **Statistics**
> ⏰ Uptime \`$uptime\`
> 🛰️ Ping \`$pingms\`
> 📆 Creation Date \`5 de fevereiro de 2022 (5.2.2022)\`
 **Global**
> 🎵 Last Sound Played **$getvar[lastsongplayed]**
> 🚫 Last Added To BlackList **INCOMPLETE SYSTEM**
}
;{actionRow:Invite me,2,5,https\\://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot:Support,2,5,https\\://discord.gg/wNCr4BTrZv};;no]
`
}
