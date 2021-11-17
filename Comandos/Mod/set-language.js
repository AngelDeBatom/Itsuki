module.exports = {
name: "language",
code: `
$if[$message==]
$replaceText[$replaceText[$getServerVar[setlanguage];<@$authorID>;<@$authorID>];$getServerVar[emojie];$getServerVar[emojie]]
$elseif[$message==pt]
$setServerVar[setlanguage;$getServerVar[emojie] <@$authorID>, diga o idioma que direi "pt" para português e "en" para inglês.]
$setServerVar[botlanguage;🇧🇷 Português de Brasil]
$getServerVar[emojic] <@$authorID>, agora eu falo português.
$endelseif
$elseif[$message==en]
$resetServerVar[setlanguage]
$resetServerVar[botlanguage]
$getServerVar[emojic] <@$authorID>, now i speak english.
$endelseif
$endif


]
`
}
