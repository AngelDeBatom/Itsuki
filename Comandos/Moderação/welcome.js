module.exports = [{
name: "set-wchannel",
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
Channel: $channelName[$getServerVar[welcomech]] || $getserverVar[welcomech]
Message: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{usertag};$usertag];{user.name};$username];{user.mention};<@$authorID>];{guild.name};$serverName];{guild.members};$memberCount];{guild.id};$guildid]
Dm: $getServerVar[welcomedm]
Auto-role: $getServerVar[autorole] 
Image:
\`\`\`
]
$image[$getServerVar[welcomeimg]]
$footer[Executado por: $userTag;$authorAvatar]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere **\`( $replaceText[$replaceText[$getCooldownTime[5s;globalUser;welcomestatus;$authorID];seconds;Segundos];second;Segundo] )\`** para executar o comando novamente!]
`
}, {
 name: "set-autorole",
 code: `
<@$authorID>
$title[Set Autorole]
 $description[<:correto:895110679495839785> » **$username**, o cargo de welcome foi definido para, <@&$mentionedRoles[1]>]
 $color[$getServerVar[embedscolor]] 
$footer[Executado por: $userTag;$authorAvatar]
 $setServerVar[autorole;$mentionedRoles[1]]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere **\`( $replaceText[$replaceText[$getCooldownTime[5s;globalUser;set-autorole;$authorID];seconds;Segundos];second;Segundo] )\`** para executar o comando novamente!]
  `
}, {
  name: "enable-wdm",
  code: `
$title[Welcome DM]
 $description[<:correto:895110679495839785> » **$username**, welcome por dm foi ativado]
 $color[$getServerVar[embedscolor]] 
$footer[Executado por: $userTag;$authorAvatar]
  $setServerVar[welcomedm;ativado]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere **\`( $replaceText[$replaceText[$getCooldownTime[5s;globalUser;enable-wdm;$authorID];seconds;Segundos];second;Segundo] )\`** para executar o comando novamente!]

  `
}, {
  name: "set-wimg",
  code: `
$title[Welcome Image]
 $description[<:correto:895110679495839785> » **$username**, imagem de welcome foi definido para]
 $color[$getServerVar[embedscolor]] 
$footer[Executado por: $userTag;$authorAvatar]
  $image[$message]

  
  $setServerVar[welcomeimg;$message]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere **\`( $replaceText[$replaceText[$getCooldownTime[5s;globalUser;set-wimg;$authorID];seconds;Segundos];second;Segundo] )\`** para executar o comando novamente!]

  `
}, {
  name: "set-wtitle",
  code: `
$title[Welcome Title]
 $description[<:correto:895110679495839785> » **$username**, título de welcome foi definido para:\n
\`\`\`
$replaceText[$message;\`;]
\`\`\`
]
 $color[$getServerVar[embedscolor]] 
$footer[Executado por: $userTag;$authorAvatar]
  $setServerVar[welcometitle;$message]
  $onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere **\`( $replaceText[$replaceText[$getCooldownTime[5s;globalUser;set-wtitle;$authorID];seconds;Segundos];second;Segundo] )\`** para executar o comando novamente!]

`
}, {
type: "joinCommand",
channel: "$getServerVar[welcomech]",
code: `
  $if[$getServerVar[welcomech]!=]
  $title[$getServerVar[welcometitle]]
  $description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{usertag};$usertag];{user.name};$username];{user.mention};<@$authorID>];{guild.name};$serverName];{guild.members};$memberCount];{guild.id};$guildid]]
  $image[$getServerVar[welcomeimg]]
  $color[RANDOM]
  $endif

  $if[$getServerVar[welcomedm]!=ativado]
  $dm[$authorID]
  $endif
  
  $if[$getServerVar[autorole]!=]
  $giveRoles[$authorID;$getServerVar[autorole]]
  $endif
`
}]
