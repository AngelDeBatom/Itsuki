module.exports = [{
name: "setwelcome",
description: "Definir um canal de welcome!",
code: `
$setServerVar[welcomech;$mentionedChannels[1]]
$reply[$messageID;
<:correto:895110679495839785> » **$username**, o canal de welcome foi definido para, <#$mentionedChannels[1]>
;yes]
$onlyIf[$channelExists[$mentioned[1]]!=true;<:errado:895110700500934667> » **$username**, não foi possível encontrar a menção do canal informado!]
$onlyIf[$mentionedChannels[1]!=;<:errado:895110700500934667> » **$username**, você precisa informar a menção do canal!]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;lock;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}, {
name: "setwelcomemsg",
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
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;lock;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}, {
type: "joinCommand",
channel: "$getServerVar[welcomech]",
code: `
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{usertag};$usertag];{user.name};$username];{user.mention};<@$authorID>];{guild.name};$serverName];{guild.members};$memberCount];{guild.id};$guildid]
`
}]
