module.exports = {
name: "help",
aliases: ["commands"],
code: `
<@$authorID>
$title[Help Panel]
$description[
**🧠 Utilities**
**invite \`|\` ping \`|\` botinfo \`|\`afk**
**🎶 Music**
**tocar \`|\` skip \`|\` queue \`|\` loop \`|\` pause \`|\` stop \`|\` resume \`|\` disconnect \`|\` join**
]
$footer[Server hosted in #$shardID shard]
$addtimestamp
$color[$getServerVar[embedcolor]]
`
}
