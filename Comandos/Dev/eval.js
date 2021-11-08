module.exports = {
name: "eval",
aliases: ["e","ev"],
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
