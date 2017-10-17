const { Readable } = require('stream');
const rs = new Readable();

// inserting data
rs.push(new Buffer('hola mundo'));
rs.push(null);

rs.on('data', function dataHandler(data) {
  console.log(data.toString());
});
