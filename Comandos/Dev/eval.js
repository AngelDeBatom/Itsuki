module.exports = {
name: "eval",
aliases: ["e","ev"],
error: `$editMessage[$message[1];$userTag had a problem: $error]`
code: `
$color[$getServerVar[embedscolor]]
$title[Eval]
$description[
]
$addField[Output;
\`\`\`js
$eval[$message]
\`\`\`
]
$addField[Input;
\`\`\`js
$message
\`\`\`
]
$onlyIf[$message!=;]
$onlyForIDs[$botownerid;]
`
}
