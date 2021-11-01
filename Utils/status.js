module.exports = (bot) => {
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
text: "😬 Passando por uma série de reformas...", 
type: "STREAMING", 
status: "idle",
time: 12
})
bot.status({
text: "⚡ $getServerVar[botversion]", 
type: "PLAYING",
status: "online",
time: 12
})
}
