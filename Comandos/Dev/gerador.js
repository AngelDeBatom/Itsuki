module.exports = {
name: "gerar",
code: `
$if[$message==nitro]
$editIn[2s;**Strings Generated...**\n\`\`\`https://discord.gift/$randomString[16]\`\`\`]
Gerando...
$elseif[$message==Nitro]
$editIn[2s;**Strings Generated...**\n\`\`\`https://discord.gift/$randomString[16]\`\`\`]
Gerando...
Gerando...
$endelseif
$endif
$onlyForIDs[917487893210099802;838166653039935538;916777337310314576;]
`
}
