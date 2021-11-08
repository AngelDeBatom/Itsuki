module.exports = {
name: "eval",
aliases: ["e","ev"],
code: `
$eval[$message]
$onlyIf[$message!=;]
$onlyForIDs[$botownerid;]
`
}
