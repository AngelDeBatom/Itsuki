module.exports = {
name: "botinfo",
aliases: ["bi"],
description: "Informações detalhadas sobre o bot!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$apiMessage[$channelID;;
{author:Bot Info:$authorAvatar:}
{color:F39A63}
{description:
Olá **$username**, eu me chamo Téo\\™, tenho 13 anos e sou um simples bot criado com o intuito de divertir e moderar seu servidor.

Vivo nesse mundo desde 5 de outubro de 2021 para garantir a diversão e a moderação no seu servidor. :D

Ao total, tenho \`[ $abbreviate[$getVar[comandos]] ]\` comando que foram executados em mim!

<:bot:897548336670834789> **Informações**
> » Criadores ***\`[ $userTag[$botownerid] e $userTag[542305880054431764] ]\`***
> » Prefixo: ***\`[ Servidor: $getServerVar[prefix] | Padrão: t^ ]\`***
> » Total de usuários ***\`[ $allMembersCount ]\`***
> » Total de servidores que estou: ***\`[ $serverCount ]\`***
<:hospedagem:899694155205345290> **Hospedagem**
> » Database ***\`[ FireBase ]\`***
> » Serviço de Ping ***\`[ UptimeRobot ]\`***
<:estatistica:897548336905723905> **Estatísticas**
> » Uptime ***\`[ $uptime ]\`***
> » Ping ***\`[ $pingms ]\`***
> » Total de comandos executados ***\`[ $getVar[comandos] ]\`***
> » Total de comandos ***\`[ $commandsCount ]\`***
> » Data de criação: ***\`[ 5 de outubro de 2021 (5/10/2021) ]\`***
<:links:897548336524050483> **Link's Importantes**
> » Invite [Me adicione no seu servidor (\´▽\`ʃ♡ƪ)](https://discord.com/api/oauth2/authorize?client_id=895106609406160978&permissions=8&scope=bot)
> » Suporte [Algum erro, precisa de ajuda, contate nosso suporte ヾ(•ω•\`)](https://discord.gg/3WtCz2vpBs)
}
;{actionRow:Vote em Mim!,2,5,https\\://top.gg/bot/895106609406160978:Me Convide!,2,5,https\\://discord.com/api/oauth2/authorize?client_id=895106609406160978&permissions=8&scope=bot:Suporte!,2,5,https\\://discord.gg/3WTCz2vpBs};;no]

$suppressErrors[<:errado:895110700500934667> » **$username**, algo deu errado ao executar o comando. Provavelmente estou sem a permissão ***\`[ Usar Emojis Externos ]\`***!]
$globalCooldown[5s;<:errado:895110700500934667> » **$username**, calma ai apressadinho espere ***\`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;botinfo;$authorID];seconds;Segundos];second;Segundo] ]\`*** para executar o comando novamente!]
`
}