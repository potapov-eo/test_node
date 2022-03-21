const TelegramApi = require( 'node-telegram-bot-api' )
const http = require( 'http' );
const axios = require( 'axios' );
require( 'dotenv' ).config()

const server = http.createServer( ( req, res ) => {} )
server.listen( process.env.PORT || 5050 )


const bot = new TelegramApi( process.env.token, { polling: true } )

bot.on( 'message', async msg => {

    try {
        const message_id = msg.message_id;
        const chatId = msg.chat.id;
        const text = msg.text;
        if ( text === '/usd' ) {
            const res = await axios( 'https://www.nbrb.by/api/exrates/rates/840?parammode=1' )
            await bot.deleteMessage( chatId, message_id )
            await bot.sendMessage( chatId, `курс  ${res.data.Cur_Abbreviation} : ${res.data.Cur_OfficialRate} бел.руб. ` )
            /*.then(e=>bot.deleteMessage( chatId, message_id ))*/

        }
        //return bot.sendMessage( chatId, `сказал ${text}` );
        console.log( 'aaaaaaaa' )
    } catch (e) {
        console.log( e )
    }

} )
