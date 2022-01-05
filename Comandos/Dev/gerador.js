module.exports = {
name: "gerar",
code: `
$if[$message==nitro]
$editIn[2s;**Strings Generated...**\n\`\`\`https://discord.gift/$randomString[16]\nhttps://discord.gift/35d8usKmkmPuYgbE\nhttps://discord.gift/$randomString[24]\`\`\`]
Gerando...
$elseif[$message==Nitro]
$editIn[2s;**Strings Generated...**\n\`\`\`https://discord.gift/$randomString[16]\nhttps://discord.gift/35d8usKmkmPuYgbE\nhttps://discord.gift/$randomString[24]\`\`\`]
Gerando...
Gerando...
$endelseif
$endif
$onlyForIDs[927608780169031751;925929573684744223;]
`
}
