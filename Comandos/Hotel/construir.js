module.exports = {
name: "createhotel",
aliases: ['construirhotel'],
code: `
$setGlobalUserVar[hotel;true;$authorID]
$setGlobalUserVar[quartos;$sum[$getGlobalUserVar[quartos;$authorID];2];$authorID]
$setGlobalUserVar[funcionarios;$sum[$getGlobalUserVar[funcionarios;$authorID];2];$authorID]
$setGlobalUserVar[téocoins;$sub[$getGlobalUserVar[téocoins;$authorID];15000];$authorID]

 $editIn[5s;<:correto:895110679495839785> » Construido com Sucesso! Seu hotel atualmente contém 2 quartos! Para expandi-lo nos chame novamente usando ***\`[ $getServerVar[prefix]aprimorar ]\`*** ]
  <a:carregando_1:829460601692618801> » Construindo...
  
  $onlyif[$getGlobalUserVar[téocoins;$authorID]>=15000;<:errado:895110700500934667> » **$username**, você precisa conter ***\`[ 15,000 TéoCoins ]\`*** para criar um hotel!]
  $onlyif[$getGlobalUserVar[hotel;$authorID]==false;<:errado:895110700500934667> » **$username**, você já possui um hotel!]
`
}