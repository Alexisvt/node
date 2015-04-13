var fs = require('fs');
var path= "C:\\Test\\File.txt";

fs.stat(path, function(error, stats) {
  fs.open(path, "r", function(error, fd) {
    var buffer= new Buffer(stats.size);
    fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, Buffer) {
      var data= buffer.toString("utf8");
      console.log(data);
    });
  });
});
