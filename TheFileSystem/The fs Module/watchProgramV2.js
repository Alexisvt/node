const fs = require('fs');
const path = require('path');

const watcher = fs.watch(path.join(__dirname, 'sampleFile.txt'));

watcher.on('change', (event, filename) => {
  console.log(`${event} on file ${filename}`); /*?*/
});
