var fs = require('fs');
var path= "C:\\Test\\File.txt";
var data= "Yo soy discipulo de Jesus";

fs.open(path, "w", function(errro, fd) {
  var buffer= new Buffer(data);

  fs.write(fd, buffer, 0, buffer.length, null, function(error,written, buffer) {
    if (error) {
      console.error("Write error: " + error.message);
    }else {
      console.log("Successfully wrote " + written + "bytes.");
    }
  });
});
