var fs = require('fs');
var path= "C:\\Test\\File.txt";

fs.readFile(path, "utf8", function(error, data) {
  if (error) {
    console.error("Read error: " + error.message);
  }else {
    console.log(data);
  }
});
