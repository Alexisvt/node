const http = require('http');
const fs = require('fs');

const PORT = 5412;

// starting the server
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  // loading html file to serve to the req
  fs.readFile('./index.html', (err, data) => {
    res.end(data);
  });
});

console.log(`Listening on http://localhost:${PORT}`);
server.listen(PORT);
