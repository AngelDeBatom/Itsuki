const Discord = require('discord.js');
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

//Configurando a Firebase
//Importando o packager principal
const firebase = require("firebase")
//Chaves principais da Firebase
const firebaseConfig = {  
  apiKey: "AIzaSyB7kKB13dfip4JhvjKScQV4TrzJfv84lhQ",
  authDomain: "sunshinedb-d8c36.firebaseapp.com",
  databaseURL: "https://sunshinedb-d8c36-default-rtdb.firebaseio.com",
  projectId: "sunshinedb-d8c36",
  storageBucket: "sunshinedb-d8c36.appspot.com",
  messagingSenderId: "534494442221",
  appId: "1:534494442221:web:3a200378f50dda65c492e4",
  measurementId: "G-VE8BXZF72D"
};
//Iniciando a Firebase
const test = firebase.initializeApp(firebaseConfig);
//Definindo ZenitsuDB como a database para o client
const db = firebase.firestore();

const bot = new Aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
mobile: false,
sharding: true,
shardAmount: 2,
autoUpdate: true,
fetchInvites: true,
suppressAllErrors: true,
db: test,
intents: "all",
debugs:{
interpreter: true
  },  
})

//Configurando o Client D.JS
const { Client } = require('discord.js');
const client = new Discord.Client({
  disableMentions: 'everyone',
  disableMentioned: 'here'
});

//Arquivos principais do bot
require('./Utils/status.js')(bot);
require('./Utils/callbacks.js')(bot);

//Requerindo a pasta de comandos
bot.loadCommands(`./Comandos/`)

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



