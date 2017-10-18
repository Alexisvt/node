const { Duplex } = require('stream');

class InOutStream extends Duplex {
  constructor() {
    super();
    this.currentCharCode = 65;
  }
  _read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
  _write(chunk, enconding, callback) {
    console.log(chunk.toString());
    return true;
  }
}

const inOutStream = new InOutStream();

process.stdin.pipe(inOutStream).pipe(process.stdout);
