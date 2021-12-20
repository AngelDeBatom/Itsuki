module.exports = {
  name: "addemoji",
  aliases: "ad",
  code: `
<:incorrect:909966535769092156> <@$authorID>, emoji $addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[1];<]$checkContains[$message[1];:]$checkContains[$message[1];>]==truetruetrue]$isNumber[$message[1]];truefalse;$replaceText[$advancedTextSplit[$message[1];:;3];>;]];falsetrue;$message[1]];$message[2];yes] adicionado com o nome: **$message[2]**
$onlyIf[$charCount[$message[2]]>=2;<:incorrect:909966535769092156> <@$authorID>, você deve colocar um nome mais longo do que **2** caracteres.]
$onlyIf[$message[2]!=;<:incorrect:909966535769092156> <@$authorID>, tente usar: **$getServerVar[prefix]addemoji <emoji | emojiID> <name>**]
$onlyPerms[manageemojis;<:incorrect:909966535769092156> <@$authorID>, permissão em falta: **Gerenciar Emojis**]
$onlyBotPerms[manageemojis;<:incorrect:909966535769092156> <@$authorID>, estou com permissão em falta: **Gerenciar Emojis**.]
$suppressErrors
`
}
