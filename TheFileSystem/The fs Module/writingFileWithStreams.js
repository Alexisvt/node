const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'createdFileStreamed.txt');
const data = `El gran amor de Jesus
El señor nos ama con tal amor que él mismo se ofrecio por nosotros (Juan 3: 16)`;

const stream = fs.createWriteStream(filePath);
stream.write(data);
stream.end();

stream.on('close', () => {
  // here we can actions when the stream wrote the content
  console.log('The stream was Done with the write process');
});
