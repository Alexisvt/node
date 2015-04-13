var fs = require('fs');
var path= "C:\\Test\\File.txt";
var data= "Yo soy de Jesus";

fs.writeFile(path, data, function(error) {
  if (error) {
    console.error("Write error: " + error.message);
  }else {
    console.log("Successfully wrote " + path);
  }
});
