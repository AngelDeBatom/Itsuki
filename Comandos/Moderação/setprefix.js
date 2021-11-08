module.exports = {
name: "set-prefix",
description: "Altere o prefixo do bot!",
code: `
$title[Set prefix]
$description[**[$message[1]]** was defined in my database as a new prefix successfully!.]
$color[$getServerVar[embedscolor]]
$setServerVar[prefix;$message[1]]
$onlyIf[$message[1]!=;$getServerVar[emojie] **| $username**, Incorrect usage mode try \`$getServerVar[prefix]setprefix < new prefix >\`]
$onlyIf[$charCount[$message[1]]<=4;$getServerVar[emojie] **| $username**, The prefix cannot contain more than 4 characters!]
$onlyPerms[manageserver;$getServerVar[emojie] **| $username**, Missing \`Manage Server\` permission!]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;set-prefix;$authorID]\` to use the command again!]
` 
}
