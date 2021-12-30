module.exports = {
name: "modo-extrovertido",
code: `
$if[$getServerVar[extrovertido]==desligado]
$setServerVar[extrovertido;ligado]
<a:sim:926052904593412106> <@$authorID>, modo extrovertido **ligado**. 😝
$elseif[$getServerVar[extrovertido]==ligado]
$setServerVar[extrovertido;desligado]
<a:sim:926052904593412106> <@$authorID>, modo extrovertido **desligado**. 😝
$endif

`
}
