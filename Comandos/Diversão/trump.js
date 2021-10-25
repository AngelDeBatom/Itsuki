module.exports = {
name: "trump",
description: "Publique algo no twitter do Donald Trump",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{author:Twitter de Donald Trump:$authorAvatar}
{color:F39A63}
{description:}
{image:https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1]}
;yes]
$onlyIf[$message!=;<:errado:895110700500934667> » **$username**, informe a mensagem que aparecerá no twitter de Donald Trump!]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;trump;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}