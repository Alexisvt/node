var fs = require('fs');
var oldPath= "C:\\Test\\File.txt";
var newPath= "C:\\Test\\Test.txt";

fs.rename(oldPath, newPath, function(error) {
  if (error) {
    console.error("rename error: " + error.message);
  }else {
    console.log("Successfully rename the File!");
  }
});
