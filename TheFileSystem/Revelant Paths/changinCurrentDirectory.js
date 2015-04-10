/*
An example, shown in Listing 6-5, that uses the chdir() method displays
the current working directory and then attempts to change to the root directory,
/. If an error occurs, it is caught and then printed to stderr. Finally, the
updated working directory is displayed.
*/

console.log("The current working directory is " + process.cwd());

try {
  process.chdir("C:\\Users\\OSI-7\\Documents\\Test Enviroments\\Node")
} catch (e) {
  console.log("chdir error: " + e.message);
}

console.log("The current working directory is now " + process.cwd());
