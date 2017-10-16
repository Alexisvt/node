const fs = require('fs');
const path = require('path');

// reading a file using streams
let stream = fs.createReadStream(path.join(__dirname, 'sampleFile.txt'));

stream.on('data', chunk => {
  console.log(chunk.toString());
});

stream.on('end', () => {
  console.log('the stream read the whole file sucessfuly');
});
