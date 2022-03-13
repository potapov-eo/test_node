const TelegramApi = require('node-telegram-bot-api')

const token = '5274353845:AAG--zZWI0AaebM_hOFEr4KmtN2Gxjop1B4'

const bot = new TelegramApi(token, {polling: true})

const chats = {}
bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    try {
        if (text === '/start') {
            console.log("работает!!!!!!",msg )
        }

    } catch (e) {
        return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
    }

})
