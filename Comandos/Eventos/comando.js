module.exports = {
name: "$alwaysExecute",
code: `
$reply[$messageID;
$getServerVar[emojie] » **$username**, o comando \`$message[1]\` não existe, um dos principais erros que pode ter acontecido foi: **erro ortográfico** ou o comando realmente é **inexistente**!
$onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefix];];name]!=;]
$onlyIf[$message[1]!=;]
$onlyIf[$stringStartsWith[$splitText[1];$getServerVar[prefix]]!=false;]
$splitText[$message[1];]
`
}
