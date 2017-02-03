'use strict';

var _telebot = require('telebot');

var _telebot2 = _interopRequireDefault(_telebot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bot = new _telebot2.default('323928404:AAEvhInQ6ceSBXVTptoWeta6VpbGs_LEBcg');


bot.on('text', msg => {
  let id = msg.from.id;
  let text = msg.text;
  return bot.sendMessage(id, `You said ${text}`);
});

bot.on('/start', msg => {
  return bot.sendMessage(msg.from.id, `Hola estas son las comandos que entiendo:
  /start lista de comandos disponibles
  /info mensaje de bienvenida`);
});

bot.on('/info', msg => {
  return bot.sendMessage(msg.from.id, `Hola! El bot que usas esta en desarrollo pero esperamos tenerlo listo lo mas pronto posible.
  Su función básica será mostrar noticias relacionadas con el desarrollo web.`);
});

bot.connect();
