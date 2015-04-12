//Extracting the Directory Name from a Path using path.dirname()

var path = require('path');
var filename= "/foo/bar/baz.txt";
var dirname= path.dirname(filename);

console.log(dirname);
