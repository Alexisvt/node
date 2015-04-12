/*
The path.relative() method, which can be used to determine the relative path from one directory to another, takes
two strings as its arguments. The first argument represents the starting point of the calculation, while the second
corresponds to the end point. In the example in Listing 6-20 showing the use of relative(), a relative path from /
foo/bar to /baz/biff is calculated. Based on this directory structure, a relative path moves up two levels to the root
directory before traversing /baz/biff.
*/

var path = require('path');
var from = "/foo/bar";
var to= "/baz/biff";
var relative= path.relative(from,to);

console.log("relative is " + relative);
// relative is ..\..\baz\biff
