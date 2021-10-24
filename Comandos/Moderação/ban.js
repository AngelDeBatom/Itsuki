module.exports = {
name: "ban",
description: "Banir alguma pessoa que não respeitou as diretrizes!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageid;<:nada:895112926678097930><:correto:895110679495839785> **O usuário: \`$userTag[$finduser[$message[1]]]\` foi banido do servidor por: \`$userTag[$authorid]($authorid)\`**\n<:nada:895112926678097930><:anota:895111716814323744> **Motivo:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Motivo não especifícado.];false;$messageSlice[1]];yes]
$ban[$findUser[$message[1]];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Motivo não especifícado.];false;$messageSlice[1]]]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];<:errado:895110700500934667> » **$username**, para utilizar o comando, você precisa ter um cargo maior do que o usuário mencionado.]
$onlyIf[$findUser[$message[1]]!=$clientID;<:errado:895110700500934667> » **$username**, não posso me banir, isso é ilegal.]
$onlyIf[$message!=;<:errado:895110700500934667> » **$username**, informe o ID ou mencione o usuário que deseja banir!]
$onlyIf[$isBanned[$findUser[$message[1]]]==false;<:errado:895110700500934667> » **$username**, este usuário já foi banido deste servidor.]
$onlyIf[$findUser[$message[1]]!=$authorID;<:errado:895110700500934667> » **$username**, Você não pode banir a si próprio!]
$onlyIf[$memberExists[$findUser[$message[1]]]!=false;<:errado:895110700500934667> » **$username**, Informe o ID ou mencione o usuário que deseja banir!]
$onlyPerms[ban;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Banir Membros\` pra utilizar esse comando!]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;ban;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}