const { Telegraf } = require("telegraf");

const bot = new Telegraf("6150538066:AAHa16AlkMjNnh7K539pCiyrz5xqTluVarA");

bot.start((ctx) => {
  ctx.reply("Hello world");
});

bot.launch();
