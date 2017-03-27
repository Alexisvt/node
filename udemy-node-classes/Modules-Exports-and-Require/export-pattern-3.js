/*
Pattern 3
Replacing the exports object with out custom object
*/

function Greetr() {
  this.greeting = 'Hello World!!';
  this.greet = function () {
    console.log(this.greeting);
  }
}

module.exports = new Greetr();