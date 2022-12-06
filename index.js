const TelegramBot = require('node-telegram-bot-api')
const os = require('os')

const bot = new TelegramBot('5774367331:AAGypYGEczRm3Mgx35vycPk0j_qzww4ybj4', { polling: true })

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"`)
})