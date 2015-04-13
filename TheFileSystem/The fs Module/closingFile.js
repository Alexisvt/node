var fs = require('fs');
var path= "C:\\Test\\Test.txt";

fs.open(path, "w+", function(error,fd) {
  if (error) {
    console.error("Open error: " + error.message);
  }else {
    fs.close(fd, function(error) {
      if (error) {
        console.error("Close error: " + error.message);
      }else {
        console.log("Successfully closed file");
      }
    });
  }
});
