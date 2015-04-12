/*
Extracting the File Name Minus the Extension from a Path using path.basename()
*/

var path = require('path');
var filename= "/foo/bar/baz.txt";
var extension= path.extname(filename);

var file= path.basename(filename, extension);

console.log(file);
