
const http = require('http');
const server = http.createServer((req, res) => {
  // Set the response status code and content-type

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  // Send a response

  res.end('Hello, World!\n');

}).listen(8085);;
