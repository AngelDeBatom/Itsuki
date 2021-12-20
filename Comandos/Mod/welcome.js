module.exports = [{
name: "w-channel",
code: `
<:correct:910318012945559594> <@$authorID>, o canal de boas-vindas foi setado para <#$mentionedChannels[1]> com sucesso!
$onlyIf[$mentionedChannels[1]!=;<:incorrect:909966535769092156> <@$authorID>, mencione um novo canal de boas-vindas!]
$onlyForPerms[managechannels;<:incorrect:909966535769092156> <@$authorID>, permissão em falta: **Gerenciar Canais**]
$onlyForChannels[$getServerVar[onlyforchannel];<@$authorID>, esse canal foi proíbido de se executar meus comandos, tente no canal <#$getServerVar[onlyforchannel]>.]
$suppressErrors
`
}, {
name: "w-msg",
aliases: ["w-message"],
code: `
<:correct:910318012945559594> <@$authorID>, a mensagem de boas-vindas foi alterada para:\n\`\`\`$replaceText[$message;\`;]\`\`\`
$onlyIf[$charCount[$message]<=501;<:incorrect:909966535769092156> <@$authorID>, a mensagem de boas-vindas não pode conter mais de *500** caracteres!]
$onlyIf[$message!=;<:incorrect:909966535769092156> <@$authorID>, informe a nova mensagem de boas-vindas!]
$onlyForPerms[managechannels;<:incorrect:909966535769092156> <@$authorID>, permissão em falta: **Gerenciar Canais**]

`
}]
