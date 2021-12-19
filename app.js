const { Telegraf } = require('telegraf');
const config = require('./secrets');

const BOT_TOKEN = config.botToken;

const bot = new Telegraf(BOT_TOKEN)
const tasks = []

bot.telegram.setMyCommands([
    {command: '/start', description: 'Запустить бота'},
    {command: '/info', description: 'Информация о пользователе'},
    {command: '/help', description: 'Полезная информация'}
])

bot.start(async (ctx) => {
    return ctx.reply('Welcome to Getting Things Done Bot')
})
bot.help(async (ctx) => {
    await ctx.reply('Tou should use ...')
})
bot.command('info', async (ctx) => {
    await ctx.reply(`Chat Id: ${ctx.message.chat.id}\nUser Name: ${ctx.message.chat.username}`)
})


bot.on('message', async (ctx) => {
    const task = ctx.message.text;
    const user = ctx.message.chat.username;
    tasks.push([user, task]);

    await ctx.reply(`User: ${user}\nTask: ${task}`)
    console.log(ctx.message)
    console.log(tasks)
})



bot.launch()