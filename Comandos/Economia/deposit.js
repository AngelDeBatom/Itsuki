module.exports = {
name: "deposit",
aliases: ["dep", "depositar"],
description: "Deposite uma certa quantia na sua conta do paypal!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$if[$noMentionMessage==all]
$setGlobalUserVar[zenitsucoins;0;$authorID]
$setGlobalUserVar[paypal;$sum[$getGlobalUserVar[paypal;$authorID];$getGlobalUserVar[téocoins;$authorID]];$authorID]
$reply[$messageID;
{author:Depositado:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, você depositou **\`[ $numberSeparator[$getGlobalUserVar[téocoins;$authorID]] ( $abbreviate[$getGlobalUserVar[téocoins;$authorID]] ) ZenitsuCoins ]\`** no seu paypal.}
{color:F39A63}
;yes]
$onlyIf[$message<=$getGlobalUserVar[téocoins;$authorID];<:errado:895110700500934667> » **$username**, não pode depositar mais do que o que está em sua carteira!]
$onlyIf[$getGlobalUserVar[téocoins;$authorID]>0;<:errado:895110700500934667> » **$username**, não há nada a depositar!]
$else
$setGlobalUserVar[paypal;$sum[$getGlobalUserVar[paypal;$authorID];$message];$authorID]
$setGlobalUserVar[zenitsucoins;$sub[$getGlobalUserVar[téocoins;$authorID];$message];$authorID]
$reply[$messageID;
{author:Depositado:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, você depositou **\`[ $numberSeparator[$noMentionMessage] ( $abbreviate[$noMentionMessage] ) ZenitsuCoins ]\`** no seu paypal.}
{color:F39A63}
;yes]
$onlyIf[$isNumber[$message[1]]==true;<:errado:895110700500934667> » **$username**, isso não é um número!]
$onlyIf[$message>=$getGlobalUserVar[téocoins;$authorID];<:errado:895110700500934667> » **$username**, não pode depositar mais do que o está em sua carteira!]
$onlyIf[$message!=;<:errado:895110700500934667> » **$username**, quanto você está retirando?]
$onlyIf[$getGlobalUserVar[téocoins;$authorID]>0;<:errado:895110700500934667> » **$username**, não há nada a depositar!]
$onlyIf[$checkContains[$message;-;+]!=true;<:errado:895110700500934667> » **$username**, você não pode inserir nenhum carácter muito menos depositar números negativos!]
$endif

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;deposit;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}
