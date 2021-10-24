module.exports = {
name: "clear",
description: "Limpar uma certa quantia de mensagem em um canal!",
code: `
$setVar[comandos;$sum[$getVar[comandos];1]]
$if[$isNumber[$message[1]]==true]
$author[Clear;$authorAvatar]
$description[**$sub[$get[delMes];1]** mensagens foram apagadas.]
$color[F39A63]
$deletecommand
$deleteIn[3s]
$let[delMes;$clear[$sum[$noMentionMessage;1];everyone;$channelID;yes]]
$onlyPerms[manageserver;<:errado:895110700500934667> » **$username**, você preciso da permissão \`Gerenciar Servidor\` para utilizar esse comando!]
$onlyBotPerms[managemessages;> <:errado:895110700500934667> » **$username**, eu preciso da permissão \`Gerenciar Mensagens\` para utilizar esse comando!]
$suppressErrors[<:errado:895110700500934667> » **$username**, ocorreu um erro ao tentar deletar as mensagens.]
$else
$author[Clear;$authorAvatar]
$description[**$sub[$get[mesDel];1]** mensagens foram apagadas.]
$color[F39A63]
$deletecommand
$deleteIn[3s]
$let[mesDel;$clear[100;everyone;$channelID;yes]]
$onlyPerms[manageserver;<:errado:895110700500934667> » **$username**, você preciso da permissão \`Gerenciar Servidor\` para utilizar esse comando!]
$onlyBotPerms[managemessages;> <:errado:895110700500934667> » **$username**, eu preciso da permissão \`Gerenciar Mensagens\` para utilizar esse comando!]
$suppressErrors[<:errado:895110700500934667> » **$username**, ocorreu um erro ao tentar deletar as mensagens.]
$endif

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando, entre em contato com o nosso suporte!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;clear;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}