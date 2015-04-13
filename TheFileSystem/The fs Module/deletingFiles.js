var fs = require('fs');
var path= "C:\\Test\\Test.txt";

fs.unlink(path, function(error) {
  if (error) {
    console.error("Unlink error: " + error.message);
  }else {
    console.log("Successfully unlink it!");
  }
});
