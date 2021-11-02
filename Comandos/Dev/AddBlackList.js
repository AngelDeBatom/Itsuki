module.exports = ({
name: "add-black-list",
aliases: "abl",
code: `$setvar[numblacklist;$sum[$getVar[numblacklist];1]]
$setvar[lastblacklist;$userTag[$finduser[$message[1]]]]
$setGlobalUserVar[rblacklist;$replacetext[$replacetext[$checkcondition[$messageSlice[1]==];true;Sem razão especificada];false;$messageSlice[1]];$finduser[$message[1]]]
$setGlobalUserVar[blacklist;true;$finduser[$message[1]]]
$author[O usuário foi adicionado na blacklist;$useravatar[$finduser[$message[1]]]]
$description[O usuário $usertag[$finduser[$message[1]]] foi adicionado na blacklist pela seguinte razão: $replacetext[$replacetext[$checkcondition[$messageSlice[1]==];true;Sem razão especificada];false;$messageSlice[1]]]
$color[$getServerVar[embedscolor]]
$onlyif[$getuservar[blacklist;$findUser[$message[1]]]==false;
$getServerVar[emojie] **Error**
$getServerVar[emojin]╰ **$username**, esse usuário já está blacklisteado!
]
$onlyForIDs[$botOwnerID;
$getServerVar[emojie] **Error**
$getServerVar[emojin]╰ **$username**, somente meu criador tem acesso a esse comando!
]
$argsCheck[>1;
$getServerVar[emojie] **Error**
$getServerVar[emojin]╰ **$username**, informe o ID\\/Menção do usuário que deseja adicionar na blacklist!
]`
})
