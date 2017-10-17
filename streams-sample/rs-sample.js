const { Readable } = require('stream');
const rs = new Readable();

rs.push('beep ');
rs.push('boop\n ');
rs.push(new Buffer('hola mundo'));
rs.push(null);

rs.pipe(process.stdout);
