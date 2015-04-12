/*
It will return the base name of the file including the extension
*/

var path = require('path');
var filename= "/foo/bar/baz.txt";
var file= path.basename(filename);

console.log(file);
