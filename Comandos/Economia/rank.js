module.exports = [{
name: "rank",
code: `
$buttonCollector[$get[id];$authorID;1m;rank1,rank2,rank3,rank4,rankinicial;rank1,rank2,rank3,rank4,rankinicial;,,64]
$let[id;$apiMessage[$channelID;;{author:Rank - Página Inicial:$authorAvatar:}{description:Olá **$username**, seja bem-vindo(a) a página inicial do rank! Para ver os ostentadores de cada rank reaja com alguma categoria dos botões abaixo.}{timestamp:ms}
{color:F39A63};{actionRow:Level,2,1,rank1:Paypal,2,1,rank2:TéoCoins,2,1,rank3:Xp,2,1,rank4};;yes]]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;rank;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}, {
name: "rank1",
type: "awaitedCommand",
code: `$interactionReply[;
{author:Rank - Level:$authorAvatar}
{title:<:mongodb:895524206291325008> Tabela de classificação de Level 
$globalUserLeaderboard[lvl;asc]}
{color:F39A63}
{timestamp:ms}
;{actionRow:Página Inicial,2,1,rankinicial:Paypal,2,1,rank2:TéoCoins,2,1,rank3:Xp,2,1,rank4};64;7]`
}, {
name: "rank2",
type: "awaitedCommand",
code: `
$interactionReply[;
{author:Rank - Level:$authorAvatar}
{title:<:paypal:895205813185052702> Tabela de classificação do Paypal 
$globalUserLeaderboard[paypal;asc;]}
{color:F39A63}
{timestamp:ms}
;{actionRow:Página Inicial,2,1,rankinicial:Level,2,1,rank1:TéoCoins,2,1,rank3:Xp,2,1,rank4};64;7]
`       
}, {
name: "rank3",
type: "awaitedCommand",
code: `
$interactionReply[;
{author:Rank - Level:$authorAvatar}
{title:<:grana:895209219287040040> Tabela de classificação do TéoCoins 
$globalUserLeaderboard[téocoins;asc]}
{color:F39A63}
{timestamp:ms}
;{actionRow:Página Inicial,2,1,rankinicial:Level,2,1,rank1:Paypal,2,1,rank2:Xp,2,1,rank4};64;7]
`       
}, {
name: "rank4",
type: "awaitedCommand",
code: `
$interactionReply[;
{author:Rank - Level:$authorAvatar}
{title:<:mongodb:895524206291325008> Tabela de classificação de XP 
$globalUserLeaderboard[xp;asc]}
{color:F39A63}
{timestamp:ms}
;{actionRow:Página Inicial,2,1,rankinicial:Level,2,1,rank1:Paypal,2,1,rank2:TéoCoins,2,1,rank3};64;7]
`       
}, {
name: "rankinicial",
type: "awaitedCommand",
code: `$interactionReply[;
{author:Rank - Página Inicial:$authorAvatar:}{description:Olá **$username**, seja bem-vindo(a) a página inicial do rank! Para ver os ostentadores de cada rank reaja com alguma categoria dos botões abaixo.}{timestamp:ms}
{color:F39A63};{actionRow:Level,2,1,rank1:Paypal,2,1,rank2:TéoCoins,2,1,rank3:Xp,2,1,rank4};64;7]`
}]