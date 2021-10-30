module.exports = {
name: "withdrawn",
aliases: ["sacar", "with", "sac"],
description: "Saque uma certa quantia de dinheiro do seu PayPal",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$if[$noMentionMessage==all]
$setGlobalUserVar[paypal;0;$authorID]
$setGlobalUserVar[zenitsucoins;$sum[$getGlobalUserVar[zenitsucoins;$authorID];$getGlobalUserVar[paypal;$authorID]];$authorID]
$reply[$messageID;
{author:Sacado:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, você sacou **\`[ $numberSeparator[$getGlobalUserVar[paypal;$authorID]] ( $abbreviate[$getGlobalUserVar[paypal;$authorID]] ) ZenitsuCoins ]\`** do seu paypal.}
{color:F39A63}
;yes]
$onlyIf[$message<=$getGlobalUserVar[paypal;$authorID];$getServerVar[emojie] » **$username**, não pode sacar mais do que o que está em seu paypal!]
$onlyIf[$getGlobalUserVar[paypal;$authorID]>0;$getServerVar[emojie] » **$username**, não há nada a retirar!]
$else
$setGlobalUserVar[zenitsucoins;$sum[$getGlobalUserVar[zenitsucoins;$authorID];$message];$authorID]
$setGlobalUserVar[paypal;$sub[$getGlobalUserVar[paypal;$authorID];$message];$authorID]
$reply[$messageID;
{author:Sacado:$authorAvatar}{description:<:correto:895110679495839785> » **$username**, você sacou **\`[ $numberSeparator[$noMentionMessage] ( $abbreviate[$noMentionMessage] ) ZenitsuCoins ]\`** do seu paypal.}
{color:F39A63}
;yes]
$onlyIf[$getGlobalUserVar[paypal;$authorID]>0;$getServerVar[emojie] » **$username**, não há nada a retirar!]
$onlyIf[$isNumber[$message[1]]==true;$getServerVar[emojie] » **$username**, isso não é um número!]
$onlyIf[$message<=$getGlobalUserVar[paypal;$authorID];$getServerVar[emojie] » **$username**, não pode sacar mais do que o está em seu paypal!]
$onlyIf[$message!=;$getServerVar[emojie] » **$username**, quanto você está retirando?]
$onlyIf[$getGlobalUserVar[paypal;$authorID]>0;$getServerVar[emojie] » **$username**, não há nada a retirar!]
$onlyIf[$checkContains[$noMentionMessage;-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;$getServerVar[emojie] » **$username**, você não pode inserir nenhum caractere muito menos sacar números negativos!]
$endif


$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao tentar executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] » **$username**, calma ai apressadinho espere **\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;withdrawn;$authorID];seconds;Segundos];second;Segundo] ]\`** para executar o comando novamente!]
`
}
