module.exports = {
name: "languague"
code: `
$if[$message==]
$getServerVar[setlanguague]
$elseif[$message==pt]
$getServerVar[emojic] <@$authorID>, agora eu falo português.
$endelseif
$elseif[$message==en]
$getServerVar[emojic] <@$authorID>, now i speak english.
$endelseif
$endif


]
`
}
