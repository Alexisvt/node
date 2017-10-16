const eventEmitter = require('events').EventEmitter;
let emitter = new eventEmitter();

//
emitter.on('newNumber', n => console.log(n * 2));

for (let i = 0; i < 10; i++) {
  emitter.emit('newNumber', i);
}
console.log('This must be the first message not the last one');
