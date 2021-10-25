module.exports = {
name: "cafuné",
description: "Faça um cafuné em alguém!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{author:🤗 $username fez um cafuné em $username[$mentioned[1]]:$authorAvatar}
{image:$randomText[https://media.tenor.com/images/c7192cc8ffa738690156fbb9334a8937/tenor.gif;https://67.media.tumblr.com/aadf9ceaee89957b111e844a53dbf806/tumblr_o925gmua611uhpv9wo1_500.gif]}
{description:}
{color:F39A63}

;yes]
$onlyIf[$mentioned[1]!=;<:errado:895110700500934667> » **$username**, informe a menção do usuário que você deseja fazer cafuné!]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;cafuné;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}