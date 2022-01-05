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
$onlyForIDs[927608780169031751;]
`
}
