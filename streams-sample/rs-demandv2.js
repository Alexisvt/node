const { Readable, Writable } = require('stream');

const destStream = new class DestStream extends Writable {
  constructor(options) {
    super(options);
  }

  write(chunk, enconding, callback) {
    console.log(chunk.toString());
    return true;
  }
}();

const srcStream = new class SrcStream extends Readable {
  constructor(options) {
    super(options);
    this.currentCharCode = 65;
  }
  _read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
}();

srcStream.pipe(destStream);
