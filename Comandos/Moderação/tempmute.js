module.exports = {	
name: "tempmute",
description: "Mutar um usuário por um certo tempo!",
code: `
$channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] foi desmutado!}
{field:Motivo:Tempmute terminado!}{color:F39A63}]
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$wait[$message[2]]
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
 $channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] foi mutado por \`$message[2]\`}
{field:Motivo:$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;Motivo não especifícado.];false;$messageSlice[2]]}{color:F39A63}]
 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];<:errado:895110700500934667> » **$username**, esse usuário tem um cargo superior ou igual o meu!]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];<:errado:895110700500934667> » **$username**, esse usuário tem um cargo superior ou igual a você!]
 
$onlyIf[$checkContains[$message[2];h;m;s]==true;<:errado:895110700500934667> » **$username**, diga uma hora válida \`(h,m,s)\`!}]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$message[2]!=;<:errado:895110700500934667> » **$username**, modo de uso incorreto tente: \`tempmute <member | userID> <time>\`]
$onlyIf[$getServerVar[muted]!=;<:errado:895110700500934667> » **$username**, o cargo de mute ainda não foi configurado tente: \`$getServerVar[prefix]setmute\` para configurar o cargo!]
$onlyPerms[mutemembers;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Silenciar Membros\` pra utilizar esse comando!]
$onlyBotPerms[mutemembers;<:errado:895110700500934667> » **$username**, eu preciso da permissão \`Silenciar Membros\` para utilizar esse comando!]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando, entre em contato com o nosso suporte!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;tempmute;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}
