module.exports = {
name: "botinfo",
description: "Informaรงรตes detalhadas sobre o bot!",
code: `

$apiMessage[$channelID;<@$authorID>;
{author:Bot Info:$authorAvatar:}
{color:FFFFFF}
{description:
Hi **$username**, here is some information about me.

 **Information**
> ๐ Creators \`$userTag[$botownerid]\`, \`$userTag[933559392786350091]\` & \`$userTag[930666216580845638]\`
> ๐ Prefix \`Guild: $getServerVar[prefix] || Standard: r! \`
> ๐ฅ Users \`$allMembersCount\`
> ๐ Guilds \`$serverCount\`
 **Statistics**
> โฐ Uptime \`$uptime\`
> ๐ฐ๏ธ Ping \`$pingms\`
> ๐ Creation Date \`5 de fevereiro de 2022 (5.2.2022)\`
 **Global**
> ๐ต Last Sound Played **$getvar[lastsongplayed]**
> ๐ซ Last Added To BlackList **INCOMPLETE SYSTEM**
}
;{actionRow:Invite me,2,5,https\\://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot:Support,2,5,https\\://discord.gg/wNCr4BTrZv};;no]
`
}
