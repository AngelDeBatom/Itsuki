module.exports = [{
  name: "afk",
  code: `
$setGlobalUserVar[afktime;$dateStamp]
$setGlobalUserVar[afk;true;$authorID]
$setGlobalUserVar[afkreason;$replaceText[$replaceText[$checkCondition[$message==];true;**O motivo não foi fornecido.**];false;$message];$authorID]
<:correct:910318012945559594> <@$authorID>, agora você está afk, motivo: \`$replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$message==];true;**O motivo não foi fornecido.**];false;$message];\`;];*;]\`, caso você digite algo no chat o afk será desativado!
$onlyIf[$charCount[$message]<150;<:incorrect:909966535769092156> <@$authorID>, o motivo do afk não pode conter mais de **150** caracteres!]
`
}, {
name: "$alwaysExecute",
code: `
$reply[$messageID;😴 <@$authorID>, o usuário está afk, motivo: \`$replaceText[$replaceText[$getGlobalUserVar[afkreason;$mentioned[1]];\`;];*;]\` **Tempo afk:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$sub[$datestamp;$getGlobalUserVar[afktime;$mentioned[1]]];time];seconds;segundos];second;segundo];minute;minuto];minutes;minutos];hour;hora];hours;horas];day;dia];days;dias];and;e];yes]
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
$reply[$messageID;😪 <@$authorID>, seu afk foi desativado, bem-vindo(a) de volta! **Tempo afk:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$sub[$datestamp;$getGlobalUserVar[afktime]];time];seconds;segundos];second;segundo];minute;minuto];minutes;minutos];hour;hora];hours;horas];day;dia];days;dias];and;e];yes]
$deleteIn[5s]
$onlyIf[$getGlobalUserVar[afk;$authorID]==true;]
$onlyif[$checkcontains[$message;$getservervar[prefix]afk]==false;]
$onlyIf[$isBot[$authorID]==false;]
$suppressErrors
`
}]
