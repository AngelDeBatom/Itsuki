module.exports = (bot) => {
  //bot
  bot.variables({
    prefix: "t-"
  })
  //user
  bot.variables({
    usedCommandsUser: "0",
    usedCommandsUserGlobal: "0",
    allCommandsUsed: "0",
    messages: "0",
    color: "BLUE",
    afk: "false",
    afkMTV: "false",
    registro: "false",
    blacklist: "false",
    premium: "false",
  })
  //server
  bot.variables({
    userToBan: "",
    userToKick: "",
    roleToAdd: "",
    roleToTake: "",
    antifake: "false",
    antibot: "false",
    antilink: "false"
  })
}
