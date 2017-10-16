/*
path.sep holds the actual system separator on windows (\) others (/)
*/

var path = require("path");
var directories= ["foo", "bar", "baz"];
var directory= directories.join(path.sep);

console.log(directory);
// foo\bar\baz
//It will print that If you run this on windows
