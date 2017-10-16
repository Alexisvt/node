const { upper, decor, concat } = require('./library-promises-pattern');

concat('hola', 'mundo')
  .then(upper)
  .then(decor)
  .then(console.log); // *HOLAMUNDO*
