module.exports = {
name: "anunciar",
code: `
$author[$splitText[7];$splitText[8]]
$title[$splitText[1]]
$description[$splitText[2]]
$color[$splitText[2]]
$footer[$splitText[3];$splitText[4]]
$thumbnail[$splitText[5]]
$image[$splitText[6]]
$addTimestamp
$textSplit[$message;/]
`
}
