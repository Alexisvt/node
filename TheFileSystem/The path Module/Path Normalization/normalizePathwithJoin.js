/*

The path module also has a join() method. Operating on an arbitrary number of strings, join() takes these
strings and creates a single normalized path. In the example in Listing 6-19, which shows how join() can be used to
normalize the path from Listing 6-18, the input path has been split into several strings. Note that join() would work
exactly like normalize() if a single string were passed in.*/

var path = require('path');
var normalized= path.join("/foo/bar", ".././bar", "../..", "/baz");

console.log(normalized);
// \baz
