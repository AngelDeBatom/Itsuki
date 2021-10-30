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
{timestamp:ms}
{footer:Executado por\\: $userTag:$authorAvatar}
;yes]
$onlyIf[$message!=;$getServerVar[emojie] » **$username**, informe a mensagem que aparecerá no twitter de Donald Trump!]
$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao tentar executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] » **$username**, calma ai apressadinho espere **\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;trump;$authorID];seconds;Segundos];second;Segundo] ]\`** para executar o comando novamente!]
`
}
