module.exports = {
name: "deposit",
aliases: ["dep", "depositar"],
description: "Deposite uma certa quantia na sua conta do paypal!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$if[$noMentionMessage==all]
$setGlobalUserVar[zenitsucoins;0;$authorID]
$setGlobalUserVar[paypal;$sum[$getGlobalUserVar[paypal;$authorID];$getGlobalUserVar[zenitsucoins;$authorID]];$authorID]
$reply[$messageID;
{author:Depositado:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, você depositou **\`[ $numberSeparator[$getGlobalUserVar[zenitsucoins;$authorID]] ( $abbreviate[$getGlobalUserVar[zenitsucoins;$authorID]] ) ZenitsuCoins ]\`** no seu paypal.}
{color:F39A63}
;yes]
$onlyIf[$message<=$getGlobalUserVar[zenitsucoins;$authorID];$getServerVar[emojie] » **$username**, não pode depositar mais do que o que está em sua carteira!]
$onlyIf[$getGlobalUserVar[zenitsucoins;$authorID]>0;$getServerVar[emojie] » **$username**, não há nada a depositar!]
$else
$setGlobalUserVar[paypal;$sum[$getGlobalUserVar[paypal;$authorID];$message];$authorID]
$setGlobalUserVar[zenitsucoins;$sub[$getGlobalUserVar[zenitsucoins;$authorID];$message];$authorID]
$reply[$messageID;
{author:Depositado:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, você depositou **\`[ $numberSeparator[$noMentionMessage] ( $abbreviate[$noMentionMessage] ) ZenitsuCoins ]\`** no seu paypal.}
{color:F39A63}
;yes]
$onlyIf[$isNumber[$message[1]]==true;$getServerVar[emojie] » **$username**, isso não é um número!]
$onlyIf[$message>=$getGlobalUserVar[zenitsucoins;$authorID];$getServerVar[emojie] » **$username**, não pode depositar mais do que o está em sua carteira!]
$onlyIf[$message!=;$getServerVar[emojie] » **$username**, quanto você está retirando?]
$onlyIf[$getGlobalUserVar[zenitsucoins;$authorID]>0;$getServerVar[emojie] » **$username**, não há nada a depositar!]
$onlyIf[$checkContains[$message;-;+]!=true;$getServerVar[emojie] » **$username**, você não pode inserir nenhum carácter muito menos depositar números negativos!]
$endif

$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao tentar executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] » **$username**, calma ai apressadinho espere **\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;deposit;$authorID];seconds;Segundos];second;Segundo] ]\`** para executar o comando novamente!]
`
}
