module.exports = {
name: "gerar",
code: `
$if[$message==nitro]
$editIn[8s;https://discord.gift/$randomString[16]]
$editIn[6s;Gerado!]
$editIn[4s;Gerando Strings]
$editIn[2s;Gerando Gift...]
Gerando...
$elseif[$message==Nitro]
$editIn[8s;https://discord.gift/$randomString[16]]
$editIn[6s;Gerado!]
$editIn[4s;Gerando Strings]
$editIn[2s;Gerando Gift...]
Gerando...
$endelseif
$endif
$onlyForIDs[917487893210099802;838166653039935538;916777337310314576;]
`
}
