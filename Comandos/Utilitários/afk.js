module.exports = [{
  name: "afk",
  code: `
$setGlobalUserVar[afk;true;$authorID]
$setGlobalUserVar[afkreason;$replaceText[$replaceText[$checkCondition[$message==];true;**O motivo não foi fornecido.**];false;$message];$authorID]
<:correct:910318012945559594> <@$authorID>, agora você está afk, motivo: $replaceText[$replaceText[$checkCondition[$message==];true;**O motivo não foi fornecido.**];false;$message], caso você digite algo no chat o afk será desativado!
$onlyIf[$charCount[$message]<150;<:incorrect:909966535769092156> <@$authorID>, o motivo do afk não pode conter mais de **150** caracteres!]
`
}, {
name: "$alwaysExecute",
code: `
$reply[$messageID;😴 <@$authorID>, o usuário está afk, motivo: $getGlobalUserVar[afkreason;$mentioned[1]];yes]
$onlyIf[$mentioned[1]!=;]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==true;]
$onlyIf[$isBot[$authorID]==false;]

`
}, {
name: "$alwaysExecute",
code: `
$setGlobalUserVar[afk;null;$authorID]
$reply[$messageID;😪 <@$authorID>, seu afk foi desativado, bem-vindo(a) de volta.;yes]
$deleteIn[5s]
$onlyIf[$getGlobalUserVar[afk;$authorID]==true;]
$onlyif[$checkcontains[$message;$getservervar[prefix]afk]==false;]
$onlyIf[$isBot[$authorID]==false;]
`
}]
