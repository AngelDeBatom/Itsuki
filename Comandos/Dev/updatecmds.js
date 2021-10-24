module.exports = {
name: "updatecmds",
aliases: ["upcmds"],
code: `
$channelSendMessage[896588821389537350;🧡 » Minha pasta de comandos foi atualizada, será que teve alguma atualização? 😜]
$updateCommands
***\`[ $commandsCount Comandos ]\`*** foram atualizados.
$onlyforids[$botownerid;542305880054431764;<:errado:895110700500934667> » **$username**, Somente meu criador tem acesso a esse comando!]
`
}, {
type: "readyCommand",
channel: "896588821389537350",
code: `🧡 » Fui reiniciado, atualmente estou em \`$serverCount\` servidores, cuidando de \`$allMembersCount\` 
`
}