var fs = require('fs');
var path= "C:\\Test\\File.txt";
var data= " y estoy orgulloso de ser de el!";

fs.appendFile(path, data, function(error) {
  if (error) {
    console.error("Write error: " + error.message);
  }else {
    console.log("Successfully wrote " + path);
  }
});
