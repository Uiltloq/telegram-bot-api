const TelegramBot = require('node-telegram-bot-api')

const token = '7007749580:AAEVTp8vZNXgabCfVVnAGM5Tta7AMNyVBOA';
const webAppUrl = 'https://ya.ru';
const bot = new TelegramBot(token, {polling:true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    if(text === '/start'){
        await bot.sendMessage(chatId, 'Это Кнопка', {
            reply_markup:{
                keyboard:[
                    [{text:'Нажми на меня'}]
                ]
            }
        });
    }

    if(text === '/help'){

    }

    bot.sendMessage(chatId, 'Я вас не понял');
});