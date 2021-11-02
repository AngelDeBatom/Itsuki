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
db: firebaseConfig,
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
bot.onInteractionCreate();
bot.onInteractionCreate();
bot.onJoined();

bot.variables({
numblacklist: "0",
lastblacklist: "Ninguém",
rblacklist: "",
blacklist: "false",
lastunblacklist: "Ninguém",
embedscolor: "e2f038",
emojie: "<:zenitsu_crying:903753184709849158>",
emojin: "<:nada:895112926678097930>",
pet: "Cachorro",
petname: "Sem Nome",
welcomemsg: "Olá {user.mention}, seja bem-vindo(a) ao {guild.name}`({guild.id})`.",
welcomech: "",
muted: "",
comandos: "0",
welcomechannel: "",
devs: "838166653039935538;542305880054431764",
prefix: "z/",
zenitsucoins: "0",
paypal: "0",
gasolina: "100",
peixes: "0",
vara: "1",
lvl: "0",
xp: "0",
rxp: "100",
hotel: "false",
quartos: "0",
funcionarios: "0",
botversion: "Sunshine 1.0.1",
})

bot.command({
  name: "slashscommands",
  code: `
$createSlashCommand[$guildID;ping;Veja o meu ping]
$createSlashCommand[$guildID;8ball;faça uma pergunta para o zenitsu;message:sua pergunta:true:3]
$createSlashCommand[$guildID;say;Irei reeptir o que você falar;message:sua mensagem:true:3] Slashs commands criado com sucesso!
$suppressErrors[]
`
})
bot.interactionCommand({
 name: "say", 
 code: `$interactionReply[$message]`
 })
bot.interactionCommand({
 name: "ping", 
 code: `
$interactionReply[
📡 Latência da API \`$pingms\`
🤖 Latência do Bot \`$botPingms\`
]
`
 })
bot.interactionCommand({
 name: "8ball", 
 code: `$interactionReply[
{author:8ball:$authorAvatar}
{color:$getServerVar[embedscolor]}
{description:}
{field:Pergunta:$message:yes}
{field:Resposta:$randomText[Com certeza;Concerteza não;Concerteza sim;Claro que não;Claro que sim;Não;Sim;Talvez;Talvez sim;Talvez não]:yes}

]`
 })






