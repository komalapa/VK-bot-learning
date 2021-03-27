
const { Bot, Keyboard, KeyboardColor } = require('node-vk-bot');
const util = require('util');
const steps = require('./steps')
const bot = new Bot({
    token: '343dde0bfe1c83ffe25f77b2d4d146a4b22c36eb8f220e0fe865511840da68213cb234e50dddcda8b7570',
    group_id: 203575930,
}).start();

// const app = express();
console.log('Bot started!');


bot.get(/./i, (message, exec, reply) => {
    let keyboard = new Keyboard(true);
    let info = message.payload  && steps[JSON.parse(message.payload)] || steps[''];
    //let msgFromBot;
    // if (message.payload) {
    //     info = JSON.parse(message.payload);
    //     msgFromBot = steps[info]
    // } else {
    //     msgFromBot = ['']
    // }
    for (let i = 0; i< info.btns.length; i++){
        if (i) keyboard.addRow()//чтобы не добавлять на первом шаге
        const btn = info.btns[i]
        keyboard.addButton(btn.msg, KeyboardColor.PRIMARY, JSON.stringify(btn.next))
    }
    reply(info.question,{keyboard}).catch(e => console.error(e));
})

bot.on('poll-error', error => {
    console.error('error occurred on a working with the Long Poll server ' +
        `(${util.inspect(error, false, 8, true)})`)
})