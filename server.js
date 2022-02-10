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
mobile: true,
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
  repondToBots: true, //Desativando responder a bot
  guildOnly: true //desativando responder na DM
})

bot.onInteractionCreate();
bot.onJoined();
bot.onLeave();

bot.joinCommand({
channel: "939669669558763560",
code: `
$title[$userTag[$authorID]]
$image[$userAvatar[$authorID]]
$footer[GuildID - $guildID | UserID - $authorID]
$color[RANDOM]
$addTimestamp
`
})


bot.leaveCommand({//command
channel: "939669669558763560",//the channel where <code> will be sent to
code: `
$title[$userTag[$authorID]]
$image[$userAvatar[$authorID]]
$footer[GuildID - $guildID | UserID - $authorID]
$color[RANDOM]
$addTimestamp
`//message sent to <channel>
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


