/*
The next example take the actual directory of the current file and test if
exist with exists and existsSync functions
*/

var fs = require('fs');
var path = __dirname;
var existsSync= fs.existsSync(path);

fs.exists(path, function(exists) {
  if (exists !== existsSync) {
    console.error("Somethig is wrong!");
  }else {
    console.log(path + " exists: " + exists);
  }
});
