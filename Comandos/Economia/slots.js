module.exports = {
  name: "slots",
  code: `
$If[$randomText[perdeu;ganhou]==ganhou]
$author[Slots;$authorAvatar]
$addTimestamp
$footer[Executado por: $userTag;$authorAvatar]
$description[
Você apostou **$numberSeparator[$message[1]]** e...Ganhou!!!
🌈 Resultado: \`$randomText[❤️|❤️|❤️;💎|💎|💎;🌸|🌸|🌸;🍄|🍄|🍄;🌱|🌱|🌱]\`
🌟 Atm: \`$numberSeparator[$getGlobalUserVar[zenitsucoins]]\`]
$setGlobalUserVar[zenitsucoins;$sum[$getGlobalUserVar[zenitsucoins;$authorID];$message[1]];$authorID]
$else
$author[Slots;$authorAvatar]
$addTimestamp
$footer[Executado por: $userTag;$authorAvatar]
$description[
Você apostou **$numberSeparator[$message[1]]**  e infelizmente...Perdeu
🌈 Resultado: \`$randomText[🌟|🌟|⭐;🍉|🍎|🍉;💛|💜|💜;🧶|🌱|⚙️;💕|💞|💕]\`
🌟 Atm: \`$numberSeparator[$getGlobalUserVar[zenitsucoins]]\`]
$setGlobalUserVar[zenitsucoins;$sub[$getGlobalUserVar[zenitsucoins;$authorID];$message[1]];$authorID]
$endIf
$color[$getServerVar[color]]
$onlyIf[$getGlobalUserVar[zenitsucoins]>=$message[1];$getServerVar[emojie] » **$username**, você não possui esse valor **ZenitsuCoins**  para apostar!]
$onlyIf[$isNumber[$message[1]]==true;$getServerVar[emojie] » **$username**, você so pode apostar números!]
$onlyIf[$message[1]!=;$getServerVar[emojie] » **$username**, insira a quantia que deseja apostar!]
$onlyIf[$checkContains[$noMentionMessage;-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;$getServerVar[emojie] » **$username**, você não pode inserir nenhum caractere muito menos apostar números negativos!]
$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao tentar executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] » **$username**, calma ai apressadinho espere **\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;slots;$authorID];seconds;Segundos];second;Segundo] ]\`** para executar o comando novamente!]

` 
}
