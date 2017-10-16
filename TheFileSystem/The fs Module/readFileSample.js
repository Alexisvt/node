const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'sampleFile.txt'), (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});
