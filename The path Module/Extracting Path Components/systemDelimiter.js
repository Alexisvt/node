/*
Another major difference between Windows and every other platform is the character that separates directories
in the PATH environment variable. Windows uses a semicolon (;), but all other systems use a colon (:). The path
module’s delimiter property is used to abstract this away. Listing 6-13 uses the delimiter property to split the PATH
environment variable and print each individual directory.
*/

var path = require('path');

process.env.PATH.split(path.delimiter).forEach(function(dir) {
  console.log(dir);
})
// path.delimiter on windows is semicolon(;) on unix two points (:)
// console.log(process.env);
//If you uncomment this you will see on windows that files are separeted with semicolon
