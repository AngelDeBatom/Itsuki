module.exports = {
name: "unban",
description: "Desbanir um usuário!",
code: `
$reply[$messageid;<:nada:895112926678097930><:correto:895110679495839785> **O usuário: \`$userTag[$finduser[$message[1]]]\` foi desbanido do servidor por: \`$userTag[$authorid]($authorid)\`**
$unban[$findUser[$message]]
$onlyIf[$message!=;<:errado:895110700500934667> » **$username**, informe o ID do usuário que deseja desbanir!]
$onlyIf[$isBanned[$findUser[$message[1]]]==true;<:errado:895110700500934667> » **$username**, este usuário não está banido.]
$onlyIf[$findUser[$message[1]]!=$authorID;<:errado:895110700500934667> » **$username**, Você não pode desbanir a si próprio!]
$onlyPerms[ban;<:errado:895110700500934667> » **$username**, você precisa da permissão \`Banir Membros\` pra utilizar esse comando!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;unban;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}