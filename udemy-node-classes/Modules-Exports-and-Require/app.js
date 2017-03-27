// @flow
const greet = require('./export-pattern-1')
greet();

const greet2 = require('./export-pattern-2').greet;
// greet2.greet(); // Hello world
greet2() // Hello world

const greet3 = require('./export-pattern-3');
greet3.greet() // Hello world