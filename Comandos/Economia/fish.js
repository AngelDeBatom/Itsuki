module.exports = {
  name: "fish",
  aliases: ["pescar", "ps"],
  description: "Vá pescar!",
  code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID];$random[4;18]];$authorID]

$setGlobalUserVar[gasolina;$sub[$getGlobalUserVar[gasolina;$authorID];$random[1;2]];$authorID]

$reply[$messageid;{author:Fish:$authorAvatar}{color:F39A63}{description:<:correto:895110679495839785> » **$username**, você pescou <:sardinha:895756065696808990>***\`[ $random[5;20]Kg de Sardinhas ]\`***, ***<:tilapia:895756065474482186>\`[ $random[1;5]Kg de Tilápias ]\`*** e obteve um lucro de: ***\`[ $sum[$multi[$random[5;20];4];$multi[$random[1;5];14]] TéoCoins e $random[3;14] XP ]\`***.
};yes]
$setGlobalUserVar[paypal;$sum[$getGlobalUserVar[paypal;$authorID];$sum[$multi[$random[5;20];4];$multi[$random[1;5];14]]];$authorID]
$globalCooldown[2m;<:errado:895110700500934667> » **$username**, aguarde ***\`[ $replaceText[$replaceText[$replaceText[$getCooldownTime[2m;globalUser;fish;$authorID];seconds;Segundos];minutes;Minutos];and;e] ]\`*** para pescar novamente!]
$onlyIf[$getGlobalUserVar[gasolina;$authorID]>=11;<:errado:895110700500934667> » **$username**, a gasolina está em uma situação crítica, reabasteça para que no meio do caminho não aconteça nenhum incidente. ]

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
`
}