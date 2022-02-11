module.exports = {
name: "invite",
code: `
$apiMessage[$channelID;<@$authorID>, invite me to your server, any questions or errors found please join my support server.;;{actionRow:Invite me,2,5,https\\://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot:Support,2,5,https\\://discord.gg/wNCr4BTrZv};;no]
`
}
