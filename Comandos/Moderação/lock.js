module.exports = {
name: "lock",
aliases: ["l"],
description: "Feche um canal!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;$guildid]
$reply[$messageID;🔒**<@$authorid> Fechado!**]
$onlyPerms[managechannels;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Canais\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;lock;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}