module.exports = ({
name: "banidos",
code: `$author[Black List;$authoravatar]
$addField[> Último desbanido;$getvar[lastunblacklist];yes]
$addField[> Último banido;$getvar[lastblacklist];yes]
$addField[> Número de banidos;$getvar[numblacklist];yes]
$color[$getServerVar[embedscolor]]

$onlyif[$getglobaluservar[blacklist]==false;
$getServerVar[emojie] **Error**
$getServerVar[emojin]╰ **$username**, você não pode utilizar esse comando pois está na blacklist, pela seguinte razão: **$getglobaluservar[rblacklist]**
**Se você acha que foi um erro, entre em contato com $usertag[$botOwnerID]**]
`
})
