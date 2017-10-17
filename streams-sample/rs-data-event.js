const { Readable } = require('stream');

const rs = new Readable();
rs.push('hola mundo');
rs.push(null);

// instead of use pipe we use the event to consumption
rs.on('data', chunk => {
  process.stdout.write(chunk);
});
