module.exports = [{
name: "casar",
aliases: "marry",
code: `
$awaitReaction[$mentioned[1];1h;
<@$mentioned[1]>, você recebeu uma proposta de casamento de <@$authorID>. Reaja com <:zenitsu_love:903708725536231424> para se casar com <@$authorID>!
;<:zenitsu_love:903708725536231424>;aceitarcasar;] !
$reply[$messageID;
<:zenitsu_love:903708725536231424> <@$authorID> e <@$mentioned[1]> se casaram. Agora os dois receberão **$200** rosquinhas a cada 12hrs!
;yes]
$onlyIf[$mentioned[1]!=;$getServerVar[emojie] » **$username**, informe a menção do usuário que você deseja se casar!]
$onlyIf[$mentioned[1]!=$authorID;$getServerVar[emojie] » **$username**, você não pode se casar consigo mesmo!]
$onlyIf[$mentioned[1]!=$isBot[$mentioned[1];$getServerVar[emojie] » **$username**, você não pode se casar com nenhum bot do discord!]
$onlyIf[$mentioned[1]!=895106609406160978;$getServerVar[emojie] » **$username**, foi mal mas não estou muito afim de me casar com você.]
$onlyIf[$getServerVar[casado;$mentioned[1]]!=false;$getServerVar[emojie] » **$username**, o usuário mencionado já é casado!]
$onlyIf[$getServerVar[casado;$authorID]!=false;$getServerVar[emojie] » **$username**, você já é casado!]
`
}, {
type: "awaitedCommand",
name: "aceitarcasar",
code: `
<:zenitsu_love:903708725536231424> <@$authorID> e <@$mentioned[1]> se casaram. Agora os dois receberão **$200** rosquinhas a cada 12hrs!
`
}, {
name: "$alwaysExecute",
code: `

`
}]
