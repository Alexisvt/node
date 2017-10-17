const { Writable, Readable } = require('stream');

// implementing our own streams yeah! :D
const srcStream = new class InStream extends Readable {
  constructor(options = {}) {
    super(options);
  }
}();
const destStream = new class OutStream extends Writable {
  constructor(options = {}) {
    super(options);
  }
  write(chunk, enconding, callback) {
    console.log(chunk.toString());
    if (callback && typeof callback === 'function') {
      callback();
    }
    return true;
  }
}();

srcStream.push('hola mundo');
srcStream.push(null);
srcStream.pipe(destStream);
