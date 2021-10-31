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

const bot = new Aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
mobile: false,
sharding: true,
shardAmount: 2,
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
  name: "slashscommands",
  code: `
$createSlashCommand[$guildID;ping;Veja o meu ping]
$createSlashCommand[$guildID;kiss;Beije um usuário;user:usuário:true:6]
$createSlashCommand[$guildID;say;Irei reeptir o que você falar;message:sua mensagem:true:3] Slashs commands succefully created!
`
})
bot.interactionCommand({
 name: "say", 
 code: `$interactionReply[$message]`
 })
bot.interactionCommand({
 name: "ping", 
 code: `$interactionReply[$message]`
 })
bot.interactionCommand({
 name: "kiss", 
 code: `$interactionReply[{author:💏 $username beijou $username[$mentioned[1]]:$authorAvatar}
{description:}
{color:$getServerVar[embedscolor]}
{timestamp:ms}
{footer:Executado por\\: $userTag:$authorAvatar}
{image:$randomText[https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif;https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif;https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865;https://acegif.com/wp-content/uploads/anime-kissin-8.gif]}
`
}
]`
 })






