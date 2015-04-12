//Provide File statistic
var fs = require('fs');
var path= __filename;

fs.stat(path, function(error, stats) {
  if (error) {
    console.error("stat error: " + error.message);
  }else {
    console.log(stats);
    console.log("Is this is a file?: "+ stats.isFile());
  }
});
