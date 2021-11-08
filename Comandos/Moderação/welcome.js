module.exports = [{
name: "set-wchannel",
description: "Definir um canal de welcome!",
code: `
$setServerVar[welcomech;$mentionedChannels[1]]
$channelSendMessage[$mentionedChannels[1];<:correto:895110679495839785> » Esse canal foi definido como canal de boas-vindas por: **$username**
$reply[$messageID;
<:correto:895110679495839785> » **$username**, o canal de welcome foi definido para, <#$mentionedChannels[1]>
;yes]
$onlyIf[$channelExists[$mentioned[1]]!=true;<:errado:895110700500934667> » **$username**, não foi possível encontrar a menção do canal informado!]
$onlyIf[$mentionedChannels[1]!=;<:errado:895110700500934667> » **$username**, você precisa informar a menção do canal!]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;lock;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}, {
name: "set-wmsg",
description: "Alterar a mensagem de welcome!",
code: `
$setServerVar[welcomemsg;$message]
$reply[$messageID;
{timestamp:ms}
{color:$getServerVar[embedscolor]}
{author:Set Welcome Message:$authorAvatar}
{description:
<:correto:895110679495839785> » **$username**, a mensagem de welcome foi alterada para:\n
\`\`\`
$replaceText[$message;\`;]
\`\`\`
}
;yes]
$onlyIf[$message!=;
{timestamp:ms}
{color:$getServerVar[embedscolor]}
{author:Set Welcome Message:$authorAvatar}
{description:
<:errado:895110700500934667> » **$username**, vejo que esta com dificuldade para alterar a mensagem de welcome, veja minhas variáveis disponíveis de welcome.
\`\`\`
{user.tag\\} - $userTag
{user.name\\} - $username
{user.mention\\} - @$username
{guild.name\\} - $serverName
{guild.members\\} - $membersCount
{guild.id\\} - $guildID
\`\`\`
Mensagem atual de welcome:
\`\`\`
$replaceText[$getServerVar[welcomemsg];\`;]
\`\`\`
}
]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere **\`( $replaceText[$replaceText[$getCooldownTime[5s;globalUser;setwelcomemsg;$authorID];seconds;Segundos];second;Segundo] )\`** para executar o comando novamente!]
`
}, {
name: "welcomestatus",
code: `
<@$authorID>
$title[Welcome Status]
$color[$getServerVar[embedscolor]]
$description[
\`\`\`
Channel: $getserverVar[welcomech]
Message: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{usertag};$usertag];{user.name};$username];{user.mention};<@$authorID>];{guild.name};$serverName];{guild.members};$memberCount];{guild.id};$guildid]
Auto-role: $if[$getServerVar[autorole]==null]Cargo não definido$else$roleName[$getServerVar[autorole]]$endif
\`\`\`
]
$addTimestamp
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;$getServerVar[emojie] **| $username**, Wait \`$getCooldownTime[5s;globalUser;set-auto-role;$authorID]\` to use the command again!]  `
}, {
 name: "set-auto-role",
 code: `
<@$authorID>
$title[Auto Role]
 $description[**$username**, <@&$findRole[$message[1]]> was defined as the role of welcome!
 $color[$getServerVar[embedscolor]] 
$addTimestamp
 $setServerVar[autorole;$mentionedRoles[1]]
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
