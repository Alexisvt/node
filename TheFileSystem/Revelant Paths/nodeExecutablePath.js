/*
The path to the node executable is also available via the process object. Specifically,
the executable path is in
the process.execPath property. Listing 6-8 shows an example displaying the node
executable path, and the
corresponding output is shown in Listing 6-9. Note that your own path may differ
based on the operating system or
the Node installation path you have in place.
*/

console.log(process.execPath);
