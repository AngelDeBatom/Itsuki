module.exports = {
name: "help",
aliases: ["commands"],
description: "Informações sobre os comandos!",
code: `
<@$authorID>
$title[Help Panel]
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
$footer[Server hosted on shard #$shardID]
$addTimestamp
$color[$getServerVar[embedscolor]]
$globalCooldown[5s;<:errado:895110700500934667> **| $username**, Wait \`$getCooldownTime[5s;globalUser;help;$authorID]\` to use the command again!]
`
}
