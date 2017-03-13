// @flow
const greet = function () {
  console.log('hello from inside greet function');
}

console.log('hello from outside of greet function');

module.exports = greet;