var fs = require('fs');

// Use fs.readFile() method to read the file
/*fs.readFile('example.txt', 'utf8', function (err, data) {
  // Display the file content
  console.log(data);
});

console.log('readFile called');*/


const res = fs.readFileSync('example.txt', 'utf8');
console.log(res);
