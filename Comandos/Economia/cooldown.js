module.exports = {
name: "cooldown",
aliases: ["cd","tempos","tempo"],
description: "Veja o cooldown dos comandos de economia!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageid;{timestamp:ms}{footer:Executado por: $userTag:$authorAvatar}{title:<:futuro:895419380601610250> **Seus Cooldowns**}{color:$getServerVar[color]}{description:
<:nada:895112926678097930>**[ Economia ]**

**Emprego**\n***\`[ $if[$getCooldownTime[5m;globalUser;work;$authorID]==0]
Use $getServerVar[prefix]work$else$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[5m;globalUser;work;$authorID];minutes;Minutos];seconds;Segundos];hours;Horas];and;e];second;Segundo];minute;Minuto];hour;Hora]$endif ]\`***
**Diário**\n***\`[ $if[$getCooldownTime[12h;globalUser;daily;$authorID]==0]
Use $getServerVar[prefix]daily$else$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[12h;globalUser;daily;$authorID];minutes;Minutos];seconds;Segundos];hours;Horas];and;e];second;Segundo];minute;Minuto];hour;Hora]$endif ]\`***
**Pesca**\n***\`[ $if[$getCooldownTime[2m;globalUser;fish;$authorID]==0]
Use $getServerVar[prefix]fish$else$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[2m;globalUser;fish;$authorID];minutes;Minutos];seconds;Segundos];hours;Horas];and;e];second;Segundo];minute;Minuto];hour;Hora]$endif ]\`***
}]

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;cooldown;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}
// FOI MUUUUUUUUUUUIIIIIIITOOOOOOOOO DIFICIL FAZER ISSO QUASE MORRI PRA FAZER (CONTÉM MUUUUIITA IRONIA)
//nss poh bebe uma agua(CONTÉM 50% DE IRONIA) e os outros 50? E pra beber mesmo
