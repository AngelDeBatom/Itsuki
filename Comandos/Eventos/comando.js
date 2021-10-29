module.exports = {
name: "$alwaysExecute",
code: `
$reply[$messageID;
$getServerVar[emojie] » **$username**, o comando \`$message[1]\` não existe, um dos principais erros que pode ter acontecido foi: **erro ortográfico** ou o comando realmente é **inexistente**!
$onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefixo];];name]==;]
$onlyIf[$stringStartsWith[$message;$getServerVar[prefix]]!=false;]
$onlyForIDs[838166653039935538;]
`
}
