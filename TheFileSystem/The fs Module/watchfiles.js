var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'sampleFile.txt');

fs.watch(filePath, { persistent: true }, function(event, filename) {
  if (event === 'rename') {
    console.log('The file was renamed/deleted.');
  } else if (event === 'change') {
    console.log('The file was changed.');
  }
});
