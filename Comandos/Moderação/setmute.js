module.exports = {
name: "set-mute-role",
description: "Definir cargo de mute!",
code: `
<@$authorID>
$addTimestamp
$color[$getServerVar[embedscolor]]
$title[Mute Role]
$description[**$username**, <@&$findRole[$message[1]]> was defined as the role of silenced!]
$setServerVar[muted;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;$getServerVar[emojie] **| $username**, this role does not exist!]
$onlyIf[$message[1]!=;$getServerVar[emojie] **| $username**, Incorrect usage mode try \`$getServerVar[prefix]set-mute-role <role | roleID>\`]
$onlyPerms[manageroles;$getServerVar[emojie] **| $username**, Missing \`Manage Roles\` permission!]
$onlyBotPerms[manageroles;$getServerVar[emojie] **| $username**, I nedd \`Manage Roles\` permission!]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;set-mute-role;$authorID]\` to use the command again!]
` 
}
