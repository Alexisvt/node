var fs = require('fs');
var path= "C:\\Test";

fs.readdir(path, function(error, files) {
  if (error) {
    console.error("Error message " + error.message);
  }else {
    files.forEach(function(file) {
      console.log(file);
    });
  }
});
