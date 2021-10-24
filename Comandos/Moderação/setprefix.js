module.exports = {
name: "setprefix",
description: "Altere o prefixo do bot!",
code: `
$reply[$messageID;
{author:Set Prefix:$authorAvatar}
{description:**[$message[1]]** foi alterado na minha variavel, como novo prefixo com sucesso.}
{color:F39A63}
;yes]
$setServerVar[prefix;$message[1]]
$onlyIf[$message[1]!=;<:errado:895110700500934667> » **$username**, insira o meu novo prefixo!]
$onlyIf[$charCount[$message[1]]<=4;<:errado:895110700500934667> » **$username**, o prefixo não pode ter mais de 4 caracteres.]
$onlyPerms[manageserver;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Gerenciar Servidor\` para utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;setprefix;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}