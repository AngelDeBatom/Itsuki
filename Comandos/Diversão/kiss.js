module.exports = {
name: "kiss",
aliases: ["beijar"],
description: "Beije alguém!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{author:😘 $username beijou $username[$mentioned[1]]:$authorAvatar}
{description:}
{color:F39A63}
{image:$randomText[https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif;https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif;https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865;https://acegif.com/wp-content/uploads/anime-kissin-8.gif]}
;yes]
$onlyIf[$mentioned[1]!=;<:errado:895110700500934667> » **$username**, informe a menção do usuário que você deseja beijar!]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando, entre em contato com o nosso suporte!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;kiss;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}