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
$if[$message==$message]No results$else$eval[$message]$endif
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
