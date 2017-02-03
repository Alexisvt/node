// @flow
import TeleBot from 'telebot';

const bot = new TeleBot('317719798:AAFAw_nqiVIaOqjks9s_fnzKa3kIJEQcBBE');

// TODO: remove all extra comments
// bot.on('text', msg => {
//   let id = msg.from.id;
//   let text = msg.text;
//   return bot.sendMessage(id, `You said ${text}`);
// });

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