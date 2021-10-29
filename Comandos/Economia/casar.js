module.exports = [{
name: "casar",
aliases: "marry",
code: `
$setGlobalUserVar[casadoauthor;$authorID;$mentioned[1]]
$awaitReaction[$mentioned[1];1h;
<@$mentioned[1]>, você recebeu uma proposta de casamento de <@$authorID>. Reaja com <:zenitsu_love:903708725536231424> para se casar com <@$authorID>!
;<:zenitsu_love:903708725536231424>;aceitarcasar;]

$onlyIf[$isBot[$mentioned[1]]!=true;$getServerVar[emojie] » **$username**, você não pode se casar com nenhum bot do discord!]
$onlyIf[$mentioned[1]!=;$getServerVar[emojie] » **$username**, informe a menção do usuário que você deseja se casar!]
$onlyIf[$mentioned[1]!=$authorID;$getServerVar[emojie] » **$username**, você não pode se casar consigo mesmo!]
$onlyIf[$mentioned[1]!=895106609406160978;$getServerVar[emojie] » **$username**, foi mal mas não estou muito afim de me casar com você.]
$onlyIf[$getServerVar[casado;$mentioned[1]]!=false;$getServerVar[emojie] » **$username**, o usuário mencionado já é casado!]
$onlyIf[$getServerVar[casado;$authorID]!=false;$getServerVar[emojie] » **$username**, você já é casado!]
`
}, {
type: "awaitedCommand",
name: "aceitarcasar",
code: `
<:zenitsu_love:903708725536231424> <@$getGlobalUserVar[casadoauthor;$mentioned[1]]> e <@$mentioned[1]> se casaram. Agora os dois receberão **$200** rosquinhas a cada 12hrs!
`
}, {
name: "$alwaysExecute",
code: `

`
}]
