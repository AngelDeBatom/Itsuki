module.exports = {
name: "languague"
code: `
$if[$message==]
$getServerVar[setlanguague]
$elseif[$message==pt]
$setServerVar[setlanguague;$getServerVar[emojie] <@$authorID>, diga o idioma que direi "pt" para português e "en" para inglês.]
$setServerVar[botlanguague;🇧🇷 Português de Brasil]
$getServerVar[emojic] <@$authorID>, agora eu falo português.
$endelseif
$elseif[$message==en]
$resetServerVar[setlanguague;$guildID]
$resetServerVar[botlanguague;$guildID]
$getServerVar[emojic] <@$authorID>, now i speak english.
$endelseif
$endif


]
`
}
