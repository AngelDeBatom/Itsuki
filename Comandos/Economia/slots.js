module.exports = {
  name: "slots",
  code: `
$If[$randomText[perdeu;ganhou]==ganhou]
$description[
Você apostou $numberSeparator[$message[1]] e...Ganhou!!!
🌈 Resultado: \`$randomText[❤️|❤️|❤️;💎|💎|💎;🌸|🌸|🌸;🍄|🍄|🍄;🌱|🌱|🌱]\`
🌟 Atm: \`$numberSeparator[$getGlobalUserVar[zenitsucoins]]\`]
$setGlobalUserVar[zenitsucoins;$sum[$getGlobalUserVar[zenitsucoins;$authorID];$message[1]];$authorID]
$else
$description[
Você apostou $numberSeparator[$message[1]]  e infelizmente...Perdeu
🌈 Resultado: \`$randomText[🌟|🌟|⭐;🍉|🍎|🍉;💛|💜|💜;🧶|🌱|⚙️;💕|💞|💕]\`
🌟 Atm: \`$numberSeparator[$getGlobalUserVar[zenitsucoins]]\`]
$setGlobalUserVar[zenitsucoins;$sub[$getGlobalUserVar[zenitsucoins;$authorID];$message[1]];$authorID]
$endIf
$color[$getServerVar[color]]
$onlyIf[$getGlobalUserVar[zenitsucoins]>=$message[1];$getServerVar[emojie] » **$username**, você não possui esse valor **ZenitsuCoins**  para apostar!]
$onlyIf[$isNumber[$message[1]]==true;$getServerVar[emojie] » **$username**, você so pode apostar números!]
$onlyIf[$message[1]!=;$getServerVar[emojie] » **$username**, insira a quantia que deseja apostar!]
$onlyIf[$checkContains[$noMentionMessage;-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;$getServerVar[emojie] » **$username**, você não pode inserir nenhum caractere muito menos apostar números negativos!]` 
}
