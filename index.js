const TelegramApi = require('node-telegram-bot-api')

const token = '5274353845:AAG--zZWI0AaebM_hOFEr4KmtN2Gxjop1B4'

const bot = new TelegramApi(token, {polling: true})


bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg)
    return bot.sendMessage(chatId, `сказал ${text}`);
    try {
        if (text === '/start') {
            console.log("работает!!!!!!",msg )
        }

    } catch (e) {
        return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
    }

})
