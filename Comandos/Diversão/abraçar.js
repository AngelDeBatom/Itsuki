module.exports = {
name: "hug",
aliases: ["abraçar"],
description: "Abrace alguém!",
code: `

$setVar[comandos;$sum[$getVar[comandos];1]]
$reply[$messageID;
{image:$randomText[https://loritta.website/assets/img/actions/hug/female_x_female/gif_151.gif;https://loritta.website/assets/img/actions/hug/generic/gif_178.gif;https://loritta.website/assets/img/actions/hug/male_x_female/gif_126.gif;https://loritta.website/assets/img/actions/hug/female_x_female/gif_132.gif;https://loritta.website/assets/img/actions/hug/both/gif_118.gif;https://loritta.website/assets/img/actions/hug/female_x_female/gif_150.gif;https://loritta.website/assets/img/actions/hug/female_x_female/gif_140.gif;https://loritta.website/assets/img/actions/hug/female_x_female/gif_141.gif;https://loritta.website/assets/img/actions/hug/female_x_female/gif_147.gif;https://loritta.website/assets/img/actions/hug/both/gif_117.gif;https://loritta.website/assets/img/actions/hug/generic/gif_171.gif;https://loritta.website/assets/img/actions/hug/female_x_female/gif_0.gif;https://loritta.website/assets/img/actions/hug/female_x_male/gif_161.gif;https://loritta.website/assets/img/actions/hug/male_x_male/gif_128.gif;https://loritta.website/assets/img/actions/hug/female_x_male/gif_159.gif;https://loritta.website/assets/img/actions/hug/male_x_female/gif_125.gif;https://loritta.website/assets/img/actions/hug/female_x_male/gif_154.gif;https://loritta.website/assets/img/actions/hug/generic/gif_179.gif;https://loritta.website/assets/img/actions/hug/female_x_male/gif_157.gif;https://loritta.website/assets/img/actions/hug/male_x_female/gif_122.gif]}
{description:}
{author:🧡 $username abraçou $username[$mentioned[1]]:$authorAvatar}
{color:F39A63}
;yes]
$onlyIf[$mentioned[1]!=;$getServerVar[emojie] » **$username**, informe a menção do usuário que você deseja abraçar!]
$suppressErrors[$getServerVar[emojie] » **$username**, algo deu errado ao tentar executar o comando!]
$globalCooldown[5s;$getServerVar[emojie] » **$username**, calma ai apressadinho espere \`[ $replaceText[$replaceText[$getCooldownTime[5s;globalUser;hug;$authorID];seconds;Segundos];second;Segundo] ]\` para executar o comando novamente!]
`
}
