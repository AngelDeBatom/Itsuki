module.exports = {
name: "invite",
code: `
$apiMessage[$channelID;<@$authorID>
Oh I see you liked me right, hahaha. How about inviting me to your server, I hope to help you by having fun and moderating your server, any questions or errors found please contact my support server!;
;{actionRow:Invite me,2,5,https\\://discord.com/api/oauth2/authorize?client_id=895106609406160978&permissions=8&scope=bot:Support,2,5,https\\://discord.gg/3WTCz2vpBs};;no]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;botinfo;$authorID]\` to use the command again!]
`
}
