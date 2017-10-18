const { Transform } = require('stream');

const upperCaseTr = new class UpperCaseTr extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, enconding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}();

process.stdin.pipe(upperCaseTr).pipe(process.stdout);
