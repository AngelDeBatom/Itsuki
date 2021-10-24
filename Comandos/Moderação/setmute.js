module.exports = {
name: "setmute",
aliases: ["setmuterole"],
description: "Definir cargo de mute!",
code: `
$reply[$messageID;
{color:F39A63}
{title:Mute Role}
{description:<:correto:895110679495839785> » **$username**, <@&$findRole[$message[1]]> foi definido como cargo de mute!}
;yes]
$setServerVar[muted;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;<:errado:895110700500934667> » **$username**, esse cargo não existe!]
$onlyIf[$message[1]!=;
<:errado:895110700500934667> » **$username**, modo de uso incorreto tente: \`$getServerVar[prefix]setmute <role | roleID>\`]
$onlyPerms[manageroles;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Cargos\` pra utilizar esse comando!]
$onlyBotPerms[manageroles;<:errado:895110700500934667> » **$username**, eu preciso da permissão \`Gerenciar Cargos\` para utilizar esse comando!]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando, entre em contato com o nosso suporte!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;setmute;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
` 
}