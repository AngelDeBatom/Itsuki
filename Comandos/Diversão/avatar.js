module.exports = {
name: "avatar",
code: `
$reply[$messageID;
{author:🖼 Avatar de $username[$findUser[$message]]:$authorAvatar}
{description:
[Clique aqui para fazer o download]($userAvatar[$findUser[$message]])
[Png]($replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];webp;png];jpg;png]) **|** [Jpg]($replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];webp;jpg];png;jpg])
}
{footer:Executado por: $userTag:$authorAvatar}
{timestamp:ms}
;yes]
`
}
