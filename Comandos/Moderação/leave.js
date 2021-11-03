
module.exports = [{
name: "setleave",
description: "Definir um canal de leave!",
code: `
$setServerVar[leavech;$mentionedChannels[1]]
$reply[$messageID;
<:correto:895110679495839785> » **$username**, o canal de leave foi definido para, <#$mentionedChannels[1]>
;yes]
$onlyIf[$channelExists[$mentioned[1]]!=true;<:errado:895110700500934667> » **$username**, não foi possível encontrar a menção do canal informado!]
$onlyIf[$mentionedChannels[1]!=;<:errado:895110700500934667> » **$username**, você precisa informar a menção do canal!]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;lock;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}, {
name: "setleavemsg",
description: "Alterar a mensagem de leave!",
code: `
$setServerVar[leavemsg;$message]
$reply[$messageID;
{timestamp:ms}
{color:$getServerVar[embedscolor]}
{author:Set Leave Message:$authorAvatar}
{description:
<:correto:895110679495839785> » **$username**, a mensagem de leave foi alterada para:\n
\`\`\`
$replaceText[$message;\`;]
\`\`\`
}
;yes]
$onlyIf[$message!=;
{timestamp:ms}
{color:$getServerVar[embedscolor]}
{author:Set Leave Message:$authorAvatar}
{description:
<:errado:895110700500934667> » **$username**, vejo que esta com dificuldade para alterar a mensagem de leave, veja minhas variáveis disponíveis de leave.
\`\`\`
{user.tag\\} - $userTag
{user.name\\} - $username
{user.mention\\} - @$username
{guild.name\\} - $serverName
{guild.members\\} - $membersCount
{guild.id\\} - $guildID
\`\`\`
Mensagem atual de leave:
\`\`\`
$replaceText[$getServerVar[leavemsg];\`;]
\`\`\`
}
]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;lock;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}, {
type: "leaveCommand",
channel: "$getServerVar[leavech]",
code: `
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{usertag};$usertag];{user.name};$username];{user.mention};<@$authorID>];{guild.name};$serverName];{guild.members};$memberCount];{guild.id};$guildid]
`
}]
