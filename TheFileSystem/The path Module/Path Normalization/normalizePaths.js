//Achieving Path Normalization Using path.normalize()

var path = require('path');
var dirname= "/foo/bar/.././bar/../../baz";
var normalized= path.normalize(dirname);

console.log(normalized);
//normalize is /baz
