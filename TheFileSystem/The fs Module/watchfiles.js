var fs = require('fs');
var path= "C:\\Test\\test.txt";

fs.watch(path, { persistent: true}, function(event, filename) {
  if (event === "rename") {
    console.log("The file was renamed/deleted.");
  }else if (event === "change") {
    console.log("The file was changed.");
  }
});
