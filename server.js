
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
autoUpdate: false,
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
bot.loadCommands("./Comandos/")

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
embedscolor: "C2E3F2",
emojie: "<:error:907025300779589652>",
comandos: "0",
devs: "838166653039935538;542305880054431764",
prefix: "r!"
})
//Welcome System
bot.variables({
welcomemsg: "Olá {user.mention}, seja bem-vindo(a) ao {guild.name}`({guild.id})`.",
welcomech: "",
welcomeimg: "https://i.pinimg.com/originals/cd/f0/9b/cdf09b00aea778cb509aafc4cccc4e77.png",
welcometitle: "Welcome",
welcomedm: "desativado",
autorole: "",
leavemsg: "{user.mention} saiu do servidor, tomará que volto um dia.",
leavech: ""
})



