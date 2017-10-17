const { createServer } = require('http');
const { join } = require('path');
const { createReadStream } = require('fs');

const PORT = 8561;
const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const rs = createReadStream(join(__dirname, 'data.json'));
  rs.pipe(res);
});

server.listen(PORT);
