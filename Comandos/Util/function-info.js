module.exports = {
 name:"function-info",
 code:`
$title[$jsonrequest[https://aoi.leref.ga/functions/$message[1];data[0].name];https://api.leref.ga/functions/$replacetext[$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd]]
$addField[Link:;[Click Me](https://api.leref.ga/functions/$replacetext[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd])]
$addField[Description:;\`\`\`js
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc]\`\`\`]
$addField[Usage:;\`\`\`js
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage]\`\`\`]
$color[#0099FF]
$thumbnail[https://avatars.githubusercontent.com/u/83202021?s=280&v=4]
$onlyIf[$jsonRequest[https://api.leref.ga/functions/$message[1];message]==;Error, command not found.]
$argsCheck[>1;Wrong usage, p?function <function>]
`
}   
