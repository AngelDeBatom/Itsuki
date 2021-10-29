const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online


const aoijs = require("aoi.js");
const a = require("aoijs.firebase");
const db = a.create({
  apiKey: "AIzaSyBALK_q3_Yduojk57-3jN51PqE7_micn7k",
  authDomain: "teo-database.firebaseapp.com",
  projectId: "teo-database",
  storageBucket: "teo-database.appspot.com",
  messagingSenderId: "283972531506",
  appId: "1:283972531506:web:be79c81c51b147f3c4d32b",
  measurementId: "G-MBC64QT9WP"
}) 

const bot = new aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
intents: "all",
database: db      
})
bot.onMessage() //Allows to execute Commands

bot.loadCommands(`./Comandos/`)

bot.onInteractionCreate();
bot.onJoined();

bot.variables({
pet: "Cachorro",
petname: "Sem Nome",
welcomemsg: "Olá {user.mention}, seja bem-vindo(a) ao {guild.name}`({guild.id})`.",
welcomech: "",
muted: "",
comandos: "0",
welcomechannel: "",
devs: "838166653039935538;542305880054431764",
prefix: "z/",
téocoins: "0",
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
})

bot.status({
text: "🍙 Cara, eu amo bolinho de arroz!", 
type: "STREAMING", 
status: "idle",
time: 12
})
bot.status({
text: "Com $numberSeparator[$allMembersCount] amiguinhos! 💛💛💛", 
type: "PLAYING", 
status: "idle",
time: 12
})
bot.status({
text: "Com $serverCount servidores! 🌏🥰", 
type: "PLAYING", 
status: "idle",
time: 12
})
bot.status({
text: "🔧 Sendo Desenvolvido.", 
type: "STREAMING", 
status: "idle",
time: 12
})





