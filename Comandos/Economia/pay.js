module.exports = [{
name: "pay",
aliases: ["give"],
code: `
$buttonCollector[$get[id];$authorID;1m;confirmar;confirmar;,,64]   
$let[id;$apiMessage[$channelID;
**$username**, você realmente deseja pagar **$$$noMentionMessage TC** para <@$mentioned[1]>, clique em **Confirmar** para efetuar o pagamento!
;;{actionRow:Confirmar,2,1,confirmar};;yes]]
`
}, {
name: "confirmar",
type: "awaitedCommand",
code: `
$interactionReply[;;{actionRow:Confirmar,2,1,confirmar,yes};64;7]
`
}]