module.exports = {
name: "help",
aliases: ["ajuda"],
description: "Informações sobre os comandos!",
code: `
<@$authorID>
$title[Painel de Ajuda]
$description[
Qualquer erro encontrado seja ortográfico ou no comando em si reporte utilizando \`$getServerVar[prefix].bug <bug>\`
]
$addField[Administration;
**clear \`|\` ban \`|\` unban \`|\` lock \`|\` unlock \`|\` tempmute**
]
$addField[Configurable;
**setprefix \`|\` setmute \`|\` tempmute \`|\` set-wchannel \`|\` set-wmsg \`|\` set-wimg \`|\` set-wtitle \`|\` set-autorole**
]
$addField[Utilities;
**ping \`|\` botinfo \`|\` userinfo**
]
$addField[Music;
**play \`|\` skip \`|\` queue \`|\` loop \`|\` pause \`|\` stop \`|\` resume \`|\` disconnect**
]
$addField[Fun;
**hug \`|\` cafuné \`|\` conquista \`|\` happy \`|\` trump \`|\` kiss**
]
$footer[Executado por: $userTag;$authorAvatar]
$addTimestamp
$color[$getServerVar[embedscolor]]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere **\`( $replaceText[$replaceText[$getCooldownTime[5s;globalUser;set-wimg;$authorID];seconds;Segundos];second;Segundo] )\`** para executar o comando novamente!]
`
}
