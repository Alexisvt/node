/*
It will return the extension of the file in this case .txt
*/

var path = require('path');
var filename = "/foo/bar/baz.txt"
var extension= path.extname(filename);

console.log(extension);
