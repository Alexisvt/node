const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 1245;
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  if (req.url === '/about') {
    const stream = fs.createReadStream(path.join(__dirname, 'about.html'));
    stream.pipe(res);
  } else {
    const stream = fs.createReadStream(path.join(__dirname, 'index.html'));
    stream.pipe(res);
  }
});
server.listen(PORT);
