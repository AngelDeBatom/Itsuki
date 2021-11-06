
const Aoijs = require('aoi.js');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const bot = new Aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
mobile: false,
sharding: true,
shardAmount: 2,
autoUpdate: true,
fetchInvites: true,
suppressAllErrors: true,
/*db: ,*/
intents: "all",
debugs:{
interpreter: true
  },  
})

//Arquivos principais do bot
require('./Utils/status.js')(bot);
require('./Utils/callbacks.js')(bot);

//Requerindo a pasta de comandos
const loader = new Aoijs.loadCommands(bot)
loader.load(bot.cmd,'./commands/')
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["bright", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgCyan"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  },
 
}) 

//Ativando as respostas do bot
bot.onMessage({
  repondToBots: false, //Desativando responder a bot
  guildOnly: true //desativando responder na DM
})

bot.onInteractionCreate();
bot.onJoined();
bot.onLeave();

bot.variables({
muted: "",
embedscolor: "7B75AB",
emojie: "<:errado:895110700500934667>",
emojin: "<:nada:895112926678097930>",
comandos: "0",
devs: "838166653039935538;542305880054431764",
prefix: "s_",
botversion: "Sunshine 1.0.1",
})
//Welcome System
bot.variables({
welcomemsg: "Olá {user.mention}, seja bem-vindo(a) ao {guild.name}`({guild.id})`.",
welcomech: "",
leavemsg: "{user.mention} saiu do servidor, tomará que volto um dia.",
leavech: ""
})



