module.exports = [{
name: "w-channel",
code: `
<:correct:910318012945559594> <@$authorID>, o canal de boas-vindas foi setado para <#$mentionedChannels[1]> com sucesso!
`
}, {
name: "w-msg",
aliases: ["w-message"],
code: `
<:correct:910318012945559594> <@$authorID>, a mensagem de boas-vindas foi alterada para:\n\`\`\`$replaceText[$message;\`;]\`\`\`
`
}]
