const aoijs = require('aoi.js');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const bot = new aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
mobile: false,
sharding: true,
shardAmount: 2,
autoUpdate: false,
fetchInvites: true,
suppressAllErrors: true,
intents: "all",
debugs:{
interpreter: true
  },  
})

//Arquivos principais do bot
require('./Utils/status.js')(bot);
require('./Utils/callbacks.js')(bot);

//Requerindo a pasta de comandos
bot.loadCommands("./Comandos/")

//Ativando as respostas do bot
bot.onMessage({
  repondToBots: false, //Desativando responder a bot
  guildOnly: true //desativando responder na DM
})

bot.onInteractionCreate();
bot.onJoined();
bot.onLeave();

bot.botJoinCommand({
channel: "939600425500426250",
code: `
$title[$userTag[$authorID]]
$image[$userAvatar[$authorID]]
$footer[GuildID: $guildID | UserID: $authorID]
$addTimestamp
`
})

bot.variables({
prefix: ".",
onlyforchannel: "$channelID",
afktime: "",
afk: "false",
afkreason: "null",
embedcolor: "0ADEBF",
extrovertido: "desligado"
})


