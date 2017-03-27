// @flow
/* 
Pattern 1
Replacing the exports object with a value in this case is a `function`
*/
const greet = function () {
  console.log('hello from inside greet function');
}

module.exports = greet;