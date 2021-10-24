module.exports = [{
name: "aprimorar",
aliases: ["melhorar"],
code: `
$awaitMessages[$authorID;10m;quartos,funcionarios;quartos,funcionarios;<:errado:895110700500934667> » **$username**, acabou seu tempo!]
**$username**, o que você deseja melhorar no seu Hotel, use alguma dessas opções \`[ quartos, funcionários,  ]\`
$onlyif[$getGlobalUserVar[téocoins;$authorID]>=5000;<:errado:895110700500934667> » **$username**, você precisa conter ***\`[ 5,000 TéoCoins ]\`*** para comprar qualquer melhoria para seu hotel!]
$onlyif[$getGlobalUserVar[hotel;$authorID]==true;<:errado:895110700500934667> » **$username**, Você precisa ter um Hotel!]

`
}, {
name: "quartos",
type: "awaitedCommand",
code: `
$setGlobalUserVar[quartos;$sum[$getGlobalUserVar[quartos];2];$authorID]
$setGlobalUserVar[téocoins;$sub[$getGlobalUserVar[téocoins;$authorID];5000];$authorID]
<:correto:895110679495839785> » **$username**, você melhorou a capacidade de quartos do seu hotel, agora seu hotel contém $sum[$getGlobalUserVar[quartos;$authorID];2] quartos.
`
}, {
name: "funcionarios",
type: "awaitedCommand",
code: `
$setGlobalUserVar[funcionarios;$sum[$getGlobalUserVar[funcionarios];2];$authorID]
$setGlobalUserVar[téocoins;$sub[$getGlobalUserVar[téocoins;$authorID];5000];$authorID]
<:correto:895110679495839785> » **$username**, você contratou mais funcionários para o seu hotel! Agora seu hotel tem $sum[$getGlobalUserVar[quartos;$authorID];2] funcionários.
$onlyif[]
`
}]