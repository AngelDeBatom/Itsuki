module.exports = {
name: "cafuné",
description: "Faça um cafuné em alguém!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{author:🤗 $username fez um cafuné em $username[$mentioned[1]]:$authorAvatar:}
{image:$randomText[https://media.tenor.com/images/c7192cc8ffa738690156fbb9334a8937/tenor.gif;https://67.media.tumblr.com/aadf9ceaee89957b111e844a53dbf806/tumblr_o925gmua611uhpv9wo1_500.gif]}
{description:}
{timestamp:ms}
{footer:Executado por: $userTag:$authorAvatar:}
{color:$getServerVar[color]}

;yes]
$onlyIf[$mentioned[1]!=;$getServerVar[emojie] » **$username**, informe a menção do usuário que você deseja fazer cafuné!]
$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado tentar ao executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] » **$username**, calma ai apressadinho espere **\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;cafuné;$authorID];seconds;Segundos];second;Segundo] ]\`** para executar o comando novamente!]
`
}
