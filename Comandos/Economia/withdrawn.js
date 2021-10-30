module.exports = {
name: "withdrawn",
aliases: ["sacar", "with", "sac"],
description: "Saque uma certa quantia de dinheiro do seu PayPal",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$if[$noMentionMessage==all]
$setGlobalUserVar[paypal;0;$authorID]
$setGlobalUserVar[zenitsucoins;$sum[$getGlobalUserVar[téocoins;$authorID];$getGlobalUserVar[paypal;$authorID]];$authorID]
$reply[$messageID;
{author:Sacado:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, você sacou **\`[ $numberSeparator[$getGlobalUserVar[paypal;$authorID]] ( $abbreviate[$getGlobalUserVar[paypal;$authorID]] ) ZenitsuCoins ]\`** do seu paypal.}
{color:F39A63}
;yes]
$onlyIf[$message<=$getGlobalUserVar[paypal;$authorID];<:errado:895110700500934667> » **$username**, não pode sacar mais do que o que está em seu paypal!]
$onlyIf[$getGlobalUserVar[paypal;$authorID]>0;<:errado:895110700500934667> » **$username**, não há nada a retirar!]
$else
$setGlobalUserVar[zenitsucoins;$sum[$getGlobalUserVar[téocoins;$authorID];$message];$authorID]
$setGlobalUserVar[paypal;$sub[$getGlobalUserVar[paypal;$authorID];$message];$authorID]
$reply[$messageID;
{author:Sacado:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, você sacou **\`[ $numberSeparator[$noMentionMessage] ( $abbreviate[$noMentionMessage] ) ZenitsuCoins ]\`** do seu paypal.}
{color:F39A63}
;yes]
$onlyIf[$getGlobalUserVar[paypal;$authorID]>0;<:errado:895110700500934667> » **$username**, não há nada a retirar!]
$onlyIf[$isNumber[$message[1]]==true;<:errado:895110700500934667> » **$username**, isso não é um número!]
$onlyIf[$message<=$getGlobalUserVar[paypal;$authorID];<:errado:895110700500934667> » **$username**, não pode sacar mais do que o está em seu paypal!]
$onlyIf[$message!=;<:errado:895110700500934667> » **$username**, quanto você está retirando?]
$onlyIf[$getGlobalUserVar[paypal;$authorID]>0;<:errado:895110700500934667> » **$username**, não há nada a retirar!]
$onlyIf[$checkContains[$message;-;+]!=true;<:errado:895110700500934667> » **$username**, você não pode inserir nenhum carácter muito menos sacar números negativos!]
$endif

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;withdrawn;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}
