module.exports = [{
name: "help",
aliases: ["ajuda"],
description: "Informações sobre os comandos!",
code: `
   $buttonCollector[$get[id];$authorID;1m;pi,click,click2,click3,click4,click5;pi,click,click2,click3,click4,click5;,,64]   
$let[id;$apiMessage[$channelID;;
{author:Help - Página Inicial:$authorAvatar:}
{description:
Olá **$username**, seja bem-vindo(a) a página inicial do meu help! Para ver mais dos meus comandos reaja com alguma categoria dos botões abaixo.
}
{timestamp:ms}
{color:F39A63}
;{actionRow:Diversão,2,1,click:Música,2,1,click2:Economia,2,1,click3:Utilidades,2,1,click4:Moderação,2,1,click5};;yes]]
$setVar[comandos;$sum[$getVar[comandos];1]]
`
}, {
name: "pi",
type: "awaitedCommand",
code: `
$interactionReply[;
{author:Help - Página Inicial:$authorAvatar:}
{description:
Olá **$username**, seja bem-vindo(a) a página inicial do meu help! Para ver mais dos meus comandos reaja com alguma categoria dos botões abaixo.
}
{timestamp:ms}
{color:F39A63}
;{actionRow:Diversão,2,1,click:Música,2,1,click2:Economia,2,1,click3:Utilidades,2,1,click4:Moderação,2,1,click5};64;7]
`
}, {
name: "click",
type: "awaitedCommand",
code: `
$interactionReply[;
{author:Help - Diversão:$authorAvatar:}
{description:😜 » Olá **$username**! Seja bem-vindo (a) a **Aba de Diversão**!\n
**hug - $commandInfo[hug;aliases]**\n$commandInfo[hug;description]
**cafuné -  $commandInfo[cafuné;aliases]**\n$commandInfo[cafuné;description]
**conquista - $commandInfo[conquista;aliases]**\n$commandInfo[conquista;description]
**feliz - $commandInfo[feliz;aliases]**\n$commandInfo[feliz;description]
**trump - $commandInfo[trump;aliases]**\n$commandInfo[trump;description]
**kiss - $commandInfo[kiss;aliases]**\n$commandInfo[kiss;description]
}
{color:F39A63}
;{actionRow:Página Inicial,2,1,pi:Música,2,1,click2:Economia,2,1,click3:Utilidades,2,1,click4:Moderação,2,1,click5};64;7]
`
}, {
name: "click2",
type: "awaitedCommand",
code: `
$interactionReply[;
{author:Help - Música:$authorAvatar:}
{description:
🎶 » Olá **$username**! Seja bem-vindo(a) a **Aba de Música**!\n
**play - $commandInfo[play;aliases]**\n$commandInfo[play;description]
**skip - $commandInfo[skip;aliases]**\n$commandInfo[skip;description]
**queue - $commandInfo[queue;aliases]**\n$commandInfo[queue;description]
**loop - $commandInfo[loop;aliases]**\n$commandInfo[loop;description]
**pause - $commandInfo[pause;aliases]**\n$commandInfo[pause;description]
**stop - $commandInfo[stop;aliases]**\n$commandInfo[stop;description]
**resume - $commandInfo[resume;aliases]**\n$commandInfo[resume;description]
**disconnect - $commandInfo[disconnect;aliases]**\n$commandInfo[disconnect;description]
}
{color:F39A63}
;{actionRow:Página Inicial,2,1,pi:Diversão,2,1,click:Economia,2,1,click3:Utilidades,2,1,click4:Moderação,2,1,click5};64;7]
`
}, {
name: "click3",
type: "awaitedCommand",
code: `
$interactionReply[;{author:Help - Economia:$authorAvatar:}
{description:💸 » Olá **$username**! Seja bem-vindo(a) a **Aba de Economia**!\n
**bal - $commandInfo[bal;aliases]**\n$commandInfo[bal;description]
**cooldown - $commandInfo[cooldown;aliases]**\n$commandInfo[cooldown;description]
**daily - $commandInfo[daily;aliases]**\n$commandInfo[daily;description]
**deposit - $commandInfo[deposit;aliases]**\n$commandInfo[deposit;description]
**fish - $commandInfo[fish;aliases]**\n$commandInfo[fish;description]
**roubar - $commandInfo[roubar;aliases]**\n$commandInfo[roubar;description]
**rank - $commandInfo[rank;aliases]**\n$commandInfo[rank;description]
**withdrawn - $commandInfo[withdrawn;aliases]**\n$commandInfo[withdrawn;description]
**work - $commandInfo[work;aliases]**\n$commandInfo[work;description]
}
{color:F39A63}
;{actionRow:Página Inicial,2,1,pi:Diversão,2,1,click:Música,2,1,click2:Utilidades,2,1,click4:Moderação,2,1,click5};64;7]
`
}, {
name: "click4",
type: "awaitedCommand",
code: `
$interactionReply[;
{author:Help - Utilidades:$authorAvatar:}
{description:$get[discord] » Olá **$username**! Seja bem-vindo(a) a **Aba de Utilidades**!\n
**help - $commandInfo[help;aliases]**\n$commandInfo[help;description]
**ping - $commandInfo[ping;aliases]**\n$commandInfo[ping;description]
**botinfo - $commandInfo[botinfo;aliases]**\n$commandInfo[botinfo;description]
}
{color:F39A63};{actionRow:Página Inicial,2,1,pi:Diversão,2,1,click:Música,2,1,click2:Economia,2,1,click3:Moderação,2,1,click5};64;7]
$let[discord;<:discord:830020052069515264>]
`
}, {
name: "click5",
type: "awaitedCommand",
code: `
$interactionReply[;{author:Help - Moderação:$authorAvatar:}
{description:
$get[mod] » Olá **$username**! Seja bem-vindo(a) a **Aba de Moderação**!\n
**clear - $commandInfo[clear;aliases]**\n$commandInfo[clear;description]
**ban - $commandInfo[ban;aliases]**\n$commandInfo[ban;description]
**unban - $commandInfo[unban;aliases]**\n$commandInfo[unban;description]
**lock - $commandInfo[lock;aliases]**\n$commandInfo[lock;description]
**unlock - $commandInfo[unlock;aliases]**\n$commandInfo[unlock;description]
**setprefix - $commandInfo[setprefix;aliases]**\n$commandInfo[setprefix;description]
**setmute - $commandInfo[setmute;aliases]**\n$commandInfo[setmute;description]
**tempmute - $commandInfo[tempmute;aliases]**\n$commandInfo[tempmute;description]
**setwelcome - $commandInfo[setwelcome;aliases]**\n$commandInfo[setwelcome;description]
**setwelcomemsg - $commandInfo[setwelcomemsg;aliases]**\n$commandInfo[setwelcomemsg;description]
}{color:F39A63}
;{actionRow:Página Inicial,2,1,pi:Diversão,2,1,click:Música,2,1,click2:Economia,2,1,click3:Utilidades,2,1,click4};64;7]
$let[mod;<:dev_1:830020861703749632>]
`
}, {
name: "miscelânea",
type: "awaitedCommand",
code: `
$editMessage[$message[1];
{title:$get[teo] » Aba de Miscelânea}
{description:$get[teo] » Olá **$username**! Seja bem-vindo(a) a **Aba de Miscelânea**!\n
**Nenhum comando foi encontrado nessa categoria!**
} 
{color:F39A63}]
$let[teo;<:Teo:896538789122539560>]
`
}, {
name: "fechar",
type: "awaitedCommand",
code: `$deleteMessage[$message[1]]`
}]
