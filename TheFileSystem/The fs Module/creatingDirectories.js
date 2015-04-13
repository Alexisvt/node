var fs = require('fs');
var path= "C:\\Test\\foo";

fs.mkdir(path, function(error) {
  if (error) {
    console.error("mkdir error: " + error.message);
  }else {
    console.log("Successfully create path: " + path);
    path+= "\\bar";
    fs.mkdir(path, function(error) {
      if (error) {
        console.error("mkdir error: " + error.message);
      }else {
        console.log("Successfully create path: " + path);
      }
    });
  }
});
