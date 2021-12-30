module.exports = {
name: "modo-extrovertido",
code: `
$if[$getServerVar[extrovertido]==desligado]
$setServerVar[extrovertido;ligado]
<a:sim:926052904593412106> <@$authorID>, modo extrovertido **ligado**. 😝
$elseif[$getServerVar[extrovertido]==ligado]
$setServerVar[extrovertido;desligado]
<a:sim:926052904593412106> <@$authorID>, modo extrovertido **desligado**. 😝
$endelseif
$endif

`
}, {
name: "$awalysExecute",
code: `
asdawdsa
$onlyIf[$checkMessageContains[$message;Pterodactyl;<@924263981554749461>;<@!924263981554749461>;Pterodáctilo]!=true;b]
$onlyIf[$getServerVar[extrovertido]!=ligado;a]
` 
}
