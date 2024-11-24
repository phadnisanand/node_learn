var http = require('http');
const fs1 = require('fs');
http.createServer(function (req, res) {

 fs1.readFile('example.txt', 'utf-8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('error in reading file.');
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });

}).listen(8085);
