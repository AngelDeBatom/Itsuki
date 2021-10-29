module.exports = {
name: "$alwaysExecute",
code: `
$reply[$messageID;
$getServerVar[emojie] » **$username**, o comando \`$replaceText[$message;$message[1];-1]\` não existe, um dos principais erros que pode ter acontecido foi: **erro ortográfico** ou o comando realmente é **inexistente**!
$onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
$onlyIf[$stringStartsWith[$message;$getServerVar[prefix]]!=false;]
$onlyIf[$message!=;]
`
}
