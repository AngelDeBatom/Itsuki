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
$if[$eval[$message]==$message]No results$else$eval[$message]$endif
\`\`\`
]
$addField[Input;
\`\`\`js
$message
\`\`\`
]
$eval[$message]
$onlyForIDs[$botownerid;]
`
}
