const discord = require('discord.js');
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


//Configurando a Firebase
//Importando o packager principal
const firebase = require("firebase")
//Chaves principais da Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfPfPBsBjaOPzAaKT8Z5FhrP80M7Gap18",
  authDomain: "zenitsu-databse.firebaseapp.com",
  databaseURL: "https://zenitsu-databse-default-rtdb.firebaseio.com",
  projectId: "zenitsu-databse",
  storageBucket: "zenitsu-databse.appspot.com",
  messagingSenderId: "86264328729",
  appId: "1:86264328729:web:4b37b9301d8c42942df088",
  measurementId: "G-0FD291TTQ5"
};
//Iniciando a Firebase
firebase.initializeApp(firebaseConfig);
//Definindo ZenitsuDB como a database para o client
const db = firebase.firestore();

const bot = new aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
mobile: false,
sharding: true,
shardAmount: 0,
autoUpdate: true,
fetchInvites: true,
suppressAllErrors: true,
//db: firebase,
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
require('./Utils/variables.js')(bot);

//Requerindo a pasta de comandos
bot.loadCommands(`./Comandos/`)

//Ativando as respostas do bot
bot.onMessage({
  repondToBots: false, //Desativando responder a bot
  guildOnly: true //desativando responder na DM
})

bot.onInteractionCreate();
bot.onJoined();

bot.command({
  name: "say",
  code: `
$createSlashCommand[$guildID;say;Irei reeptir o que você falar] Slash command succefully created!
`
}) 







