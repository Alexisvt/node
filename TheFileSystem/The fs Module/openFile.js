var fs = require('fs');
var path = require('path');
var directory= ["C:","Test","File.txt"].join(path.sep);

fs.open(directory, "w+", function(error,fd) {
  if (error) {
    console.error("Open error: " + error.message);
  }else {
    console.log("Successfully opened " + directory);
  }
});
