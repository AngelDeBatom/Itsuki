module.exports = {
name: "conquista",
aliases: ["conquest"],
description: "Consquista do Minecraft",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{author:Conquista:$authorAvatar}
{description:}
{image:https://minecraftskinstealer.com/achievement/$random[1;39]/Achievement+Get%21/$replaceText[$message;;+;-1]}
{color:$getServervar[color]}
{footer:Executado por: $userTag:$authorAvatar}
{timestamp:ms}
;yes]
$onlyIf[$message!=;$getServerVar[emojie] » **$username**, informe a mensagem que aparecerá nos stories do Donal J. Trump!]
$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] » **$username**, calma ai apressadinho espere **\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;conquista;$authorID];seconds;Segundos];second;Segundo] ]\`** para executar o comando novamente!]
`
}
