module.exports = {
name: "userinfo",
aliases: "ui",
code: `
$reply[$messageID;
{author:Userinfo de $userTag[$findUser[$message]]:$authorAvatar}
{description::bookmark: » Tag do Discord\n<:nada:895112926678097930>╰ ***\`[ $userTag[$findUser[$message]]/$findUser[$message] ]\`***
💻 » Discord ID\n<:nada:895112926678097930>╰ ***\`[ $authorID ]\`***
📅 » Conta criada há\n<:nada:895112926678097930>╰ ***\`[ $creationDate[$findUser[$message]] ]\`***
🌟 » Estrou há\n<:nada:895112926678097930>╰ ***\`[ $memberJoinedDate[$findUser[$message]] ]\`***
}{thumbnail:$userAvatar[$findUser[$message]]}{color:F39A63}

;yes]
$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;userinfo;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}