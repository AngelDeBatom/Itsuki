module.exports = {
name: "language",
code: `
$if[$message==]
$getServerVar[emojie] <@$authorID>, $getServerVar[setlanguage]
$elseif[$message==pt]
$setServerVar[setlanguage;diga o idioma que direi "pt" para português e "en" para inglês.]
$setServerVar[botlanguage;🇧🇷 Português de Brasil]
$getServerVar[emojic] <@$authorID>, agora eu falo português.
$endelseif
$elseif[$message==en]
$resetServerVar[setlanguage]
$resetServerVar[botlanguage]
$getServerVar[emojic] <@$authorID>, now i speak english.
$endelseif
$endif
`
}
