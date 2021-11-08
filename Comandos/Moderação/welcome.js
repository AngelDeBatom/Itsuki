module.exports = [{
name: "set-wchannel",
description: "Definir um canal de welcome!",
code: `
$setServerVar[welcomech;$findChannel[$message[1]]]
$channelSendMessage[$findChannel[$message[1]];This channel has been set as a welcome channel, anyone who joins the server I will be letting you know!\nDefined By **$userTag**]
$title[Welcome Channel]
$color[$getServerVar[embedscolor]]
$addTimestamp
$description[**$username**, <#$findChannel[$message[1]]> has been set as welcome channel]
$onlyIf[$channelExists[$findChannel[$message[1]]]!=true;$getServerVar[emojie] **| $username**, this channel does not exist!]
$onlyIf[$mentionedChannels[1]!=;$getServerVar[emojie] **| $username**, Incorrect usage mode try \`$getServerVar[prefix]set-wchannel <channel | channelID>\`]
$onlyPerms[managechannels;$getServerVar[emojie] **| $username**, Missing \`Manage Channels\` permission!]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;set-wchannel;$authorID]\` to use the command again!]
$suppressErrors[] `
}, {
name: "set-wmsg",
description: "Alterar a mensagem de welcome!",
code: `
<@$authorID>
$setServerVar[welcomemsg;$message]
$addTimestamp
$color[$getServerVar[embedscolor]]
$title[Welcome Message]
$description[
**$username**, The welcome message has been changed to\n
\`\`\`
$replaceText[$message;\`;]
\`\`\`
]
$onlyIf[$message!=;
<@$authorID>
{timestamp:ms}
{color:$getServerVar[embedscolor]}
{title:Welcome Message}
{description:
**$username**, I see that it is difficult to change the welcome message, see my available welcome variables.
\`\`\`
{user.tag\\} - $userTag
{user.name\\} - $username
{user.mention\\} - @$username
{guild.name\\} - $serverName
{guild.members\\} - $membersCount
{guild.id\\} - $guildID
\`\`\`
Current welcome message:
\`\`\`
$replaceText[$getServerVar[welcomemsg];\`;]
\`\`\`
}
]
$onlyPerms[managechannels;$getServerVar[emojie] **| $username**, Missing \`Manage Channels\` permission!]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;set-wmsg;$authorID]\` to use the command again!]  `
}, {
name: "welcome-status",
code: `
<@$authorID>
$title[Welcome Status]
$color[$getServerVar[embedscolor]]
$description[
\`\`\`
Channel: $getserverVar[welcomech]
Message: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{usertag};$usertag];{user.name};$username];{user.mention};<@$authorID>];{guild.name};$serverName];{guild.members};$memberCount];{guild.id};$guildid];\`;]
Auto-role: $getServerVar[autorole]
\`\`\`
]
$addTimestamp
$onlyPerms[managechannels;$getServerVar[emojie] **| $username**, Missing \`Manage Channels\` permission!]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;welcome-status;$authorID]\` to use the command again!]  `
}, {
 name: "set-auto-role",
 code: `
<@$authorID>
$title[Auto Role]
 $description[**$username**, <@&$findRole[$message[1]]> was defined as the role of welcome!
 $color[$getServerVar[embedscolor]] 
$addTimestamp
 $setServerVar[autorole;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;$getServerVar[emojie] **| $username**, this role does not exist!]
$onlyIf[$message[1]!=;$getServerVar[emojie] **| $username**, Incorrect usage mode try \`$getServerVar[prefix]set-auto-role <role | roleID>\`]
$onlyPerms[manageroles;$getServerVar[emojie] **| $username**, Missing \`Manage Roles\` permission!]
$onlyBotPerms[manageroles;$getServerVar[emojie] **| $username**, I nedd \`Manage Roles\` permission!]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;set-auto-role;$authorID]\` to use the command again!]  `
}, {
type: "joinCommand",
channel: "$getServerVar[welcomech]",
code: `
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{usertag};$usertag];{user.name};$username];{user.mention};<@$authorID>];{guild.name};$serverName];{guild.members};$memberCount];{guild.id};$guildid]

  $if[$getServerVar[autorole]!=]
  $giveRoles[$authorID;$getServerVar[autorole]]
  $endif
`
}]
