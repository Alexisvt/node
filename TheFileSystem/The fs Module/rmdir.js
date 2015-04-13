var fs = require('fs');
var path= "C:\\Test";

fs.rmdir(path, function(error) {
  if (error) {
    console.error("rmdir error: " + error.message);
  }else {
    console.log("Successfully removed dir: " + path);
  }
});

//This only remove empty directory
