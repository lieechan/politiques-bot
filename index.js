const Telegraf = require('telegraf');
require('dotenv').config();
const app = new Telegraf(process.env.BOT_TOKEN);

app.start(ctx => {
    ctx.reply('Bem vindx ! ' +  "\n" + 'Eu sou o politiquês e meu objetivo é te explicar termos da politica brasileira que você ainda não saiba o significado');
});

app.hears('hi', ctx => {
    return ctx.reply('Teste!');
});

app.hears(['O que significa é MP ?', 'MP', 'mp', 'O que é MP', 'o q e mp'], ctx => {
    return ctx.reply('Significa medida provisória');
});

app.startPolling(30);
