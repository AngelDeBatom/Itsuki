module.exports = [{
name: "bal",
aliases: ["b","atm","saldo","perfil"],
description: "Veja seu saldo!",
code: `

$reply[$messageID;{author:Carteira de $username[$findUser[$message]]:$userAvatar[$findUser[$message]]}{description:

> <:grana:895209219287040040> » **ZenitsuCoins** **\`[ $replaceText[$getGlobalUserVar[zenitsucoins;$findUser[$message]];Infinity;∞] ]\`**, Rank Position **\`[ $getLeaderboardInfo[zenitsucoins;$findUser[$message];globaluser;top] ]\`**
> <:paypal:895205813185052702> » **Paypal** **\`[ $replaceText[$getGlobalUserVar[paypal;$findUser[$message]];Infinity;∞] ]\`**, Rank Position **\`[ $getLeaderboardInfo[paypal;$findUser[$message];globaluser;top] ]\`**
> <:gasolina:895413288832221186> » **Gasolina** **\`[ $getGlobalUserVar[gasolina;$findUser[$message]]/100 ]\`**
> <:mongodb:895524206291325008> » **Nível** ***\`[ $getGlobalUserVar[lvl;$findUser[$message]] » $sum[$getGlobalUserVar[lvl;$findUser[$message]];1] ( $getGlobalUserVar[xp;$findUser[$message]] XP ) next ( $getGlobalUserVar[rxp;$findUser[$message]] XP ) ]\`**, Rank Position **\`[ $getLeaderboardInfo[lvl;$findUser[$message];globaluser;top] ]\`**
> <:pet:901974769728102460> » **Pet** **\`[ $getGlobalUserVar[pet;$findUser[$message]] ( $getGlobalUserVar[petname;$findUser[$message]] ) ]\`**
}{color:$getServerVar[embedscolor]};yes]

$suppressErrors[
$getServerVar[emojie] **Error**
$getServerVar[emojin]╰ **$username**, algo deu errado ao tentar executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] **Error**
$getServerVar[emojin]╰ **$username**, espere \`$replaceText[$replaceText[$getCooldownTime[5s;globalUser;bal;$authorID];seconds;Segundos];second;Segundo]\` para executar o comando novamente!]
`
}, {
name: "$alwaysExecute",
code: `

$setGlobalUserVar[lvl;$sum[$getGlobalUserVar[lvl];1]]
$setGlobalUserVar[rxp;$multi[$getGlobalUserVar[rxp];2]]
$onlyIf[$getGlobalUserVar[xp]>=$getGlobalUserVar[rxp];]
$suppressErrors[]

`       
}]
