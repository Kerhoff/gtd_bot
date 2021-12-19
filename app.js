const { Telegraf } = require('telegraf')


const token = 'secret'

const bot = new Telegraf(token)
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


/*
{
    message_id: 25,
    from: {
      id: 199417171,
      is_bot: false,
      first_name: 'Aleksandr',
      last_name: 'Lukashkin',
      username: 'alukashkin',
      language_code: 'en'
    },
    chat: {
      id: 199417171,
      first_name: 'Aleksandr',
      last_name: 'Lukashkin',
      username: 'alukashkin',
      type: 'private'
    },
    date: 1639840284,
    text: 'hii'
  }
*/