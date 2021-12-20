module.exports = {
  name: "addemoji",
  aliases: "ad",
  code: `
 Emoji $addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[1];<]$checkContains[$message[1];:]$checkContains[$message[1];>]==truetruetrue]$isNumber[$message[1]];truefalse;$replaceText[$advancedTextSplit[$message[1];:;3];>;]];falsetrue;$message[1]];$message[2];yes] adicionado com o nome: **$message[2]**

$onlyPerms[manageemojis;<:incorrect:909966535769092156> <@$authorID>, permissão em falta: **Gerenciar Emojis**]
$onlyBotPerms[manageemojis;<:incorrect:909966535769092156> <@$authorID>, estou com permissão em falta: **Gerenciar Emojis**.]
$suppressErrors
`
}
