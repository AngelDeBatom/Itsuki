module.exports = [{
name: "$alwaysExecute",
code: `
$reply[$messageID;
$getServerVar[emojie] » **$username**, o comando \`$message[1]\` não existe, um dos principais erros que pode ter acontecido foi: **erro ortográfico** ou o comando realmente é **inexistente**!
$onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
$onlyIf[$stringStartsWith[$message;$getServerVar[prefix]]!=false;]
$onlyForIDs[838166653039935538;]
`
}, {
name: "$alwaysExecute",
code: `
$if[$random[10;20]==10]
$addCmdReactions[😁]
$elseif[$random[10;20]==20]
$addCmdReactions[😎]
$endelseif
$elseif[$random[10;20]==15]
$addCmdReactions[🤔]
$endelseif
$endif
$onlyIf[$isBot!=true;]
$suppressErrors[]
$onlyForIDs[$botownerid;]
`
}]
