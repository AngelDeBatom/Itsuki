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
require('./Utils/variables.js')(bot);

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






