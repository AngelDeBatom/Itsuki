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

const aoifb = require('aoijs.firebase')
const database = aoifb.create({
  apiKey: "AIzaSyBYCbiNw2OGdarD2j5g6-fY7yS9Ejf3vf0",
  authDomain: "rimuru-c9dbe.firebaseapp.com",
  projectId: "rimuru-c9dbe",
  storageBucket: "rimuru-c9dbe.appspot.com",
  messagingSenderId: "506313583135",
  appId: "1:506313583135:web:6332002ae8816da012032a",
  measurementId: "G-KYHB2QYXYV"
})

const bot = new aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
mobile: false,
sharding: true,
shardAmount: 2,
autoUpdate: false,
fetchInvites: true,
suppressAllErrors: true,
db: database,
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
prefix: "m+",
onlyforchannel: "$channelID",
afktime: "",
afk: "false",
afkreason: "null",
embedcolor: "#970045",
extrovertido: "desligado"
})


