//using the library
const { concat, upper, decor } = require('./library-callback-pattern');

concat('hello', 'world', r => {
  upper(r, u => {
    decor(u, d => {
      console.log(d);
    });
  });
});
