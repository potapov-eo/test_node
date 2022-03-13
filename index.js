const TelegramApi = require('node-telegram-bot-api')
const http = require('http');
require('dotenv').config()

const server = http.createServer((req, res) => {})
server.listen(process.env.PORT || 5050)

const bot = new TelegramApi(process.env.token, {polling: true})
bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg)
    return bot.sendMessage(chatId, `сказал ${text}`);

})
