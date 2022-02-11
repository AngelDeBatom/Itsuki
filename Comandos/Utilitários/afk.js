module.exports = [{
  name: "afk",
  code: `
$setGlobalUserVar[afktime;$dateStamp]
$setGlobalUserVar[afk;true;$authorID]
$setGlobalUserVar[afkreason;$replaceText[$replaceText[$checkCondition[$message==];true;**The reason was not provided.**];false;$message];$authorID]
<:correct:910318012945559594> <@$authorID>, now you are afk, reason: \`$replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$message==];true;**O motivo não foi fornecido.**];false;$message];\`;];*;]\`, if you type something in the chat the afk will be disabled!
$onlyIf[$charCount[$message]<150;<:incorrect:909966535769092156> <@$authorID>, the afk reason cannot contain more than **150** characters!]
`
}, {
name: "$alwaysExecute",
code: `
$reply[$messageID;😴 <@$authorID>, the user is afk, reason: \`$replaceText[$replaceText[$getGlobalUserVar[afkreason;$mentioned[1]];\`;];*;]\` **Afk time:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$sub[$datestamp;$getGlobalUserVar[afktime;$mentioned[1]]];time];seconds;seconds];second;second];minute;minute];minutes;minutes];hour;hour];hours;hours];day;day];days;days];and;and];yes]
$onlyIf[$mentioned[1]!=;]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==true;]
$onlyIf[$isBot[$authorID]==false;]
$suppressErrors
`
}, {
name: "$alwaysExecute",
code: `
$setGlobalUserVar[afktime;]
$setGlobalUserVar[afk;null;$authorID]
$reply[$messageID;😪 <@$authorID>, your afk has been disabled, welcome back! **Afk time:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$sub[$datestamp;$getGlobalUserVar[afktime]];time];seconds;seconds];second;second];minute;minute];minutes;minutes];hour;hour];hours;hours];day;day];days;days];and;and];yes]
$deleteIn[5s]
$onlyIf[$getGlobalUserVar[afk;$authorID]==true;]
$onlyif[$checkcontains[$message;$getservervar[prefix]afk]==false;]
$onlyIf[$isBot[$authorID]==false;]
$suppressErrors
`
}]
