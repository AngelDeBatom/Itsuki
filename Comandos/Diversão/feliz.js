module.exports = {
name: "happy",
aliases: ["feliz"],
description: "Demonstre sua felicidade!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{author:$username está feliz:$authorAvatar}
{description:}
{image:$randomText[https://4.bp.blogspot.com/-IP-puZBTPyw/V2SgAVkWiBI/AAAAAAAABu8/uZWLbfjwc_0kI6Wk4wSKdAvkRnpbtANygCLcB/s1600/B66.gif;https://78.media.tumblr.com/tumblr_m5ivetH98C1qgcvsy.gif;https://i.pinimg.com/originals/29/dc/51/29dc5102d126b8dc3970f71c0a1e99d5.gif;https://3.bp.blogspot.com/-is2awdT3rrQ/XOWeG6PwlGI/AAAAAAAAcSk/sFkgzpuFj0gi5v4pd8hObimpdP7JAy8JgCLcBGAs/s1600/kawaii-cute-fofo-anime-gif%2B%252816%2529.gif;https://image.myanimelist.net/ui/1WiSjDgEV_PvOo8fvPZcBxpi4sCNLOm8RRFC2NAfLPAyudaxna8D2tKnTHH7zVTdmNOXQjUP1V5ghBccKck0-A]}
{color:$getServerVar[color]}
{timestamp:ms}
{footer:Executado por\\: $userTag:$authorAvatar}
;yes]

$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao tentar executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] » **$username**, calma ai apressadinho espere **\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;happy;$authorID];seconds;Segundos];second;Segundo] ]\`** para executar o comando novamente!]

`
}
