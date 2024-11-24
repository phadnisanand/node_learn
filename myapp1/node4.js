const fs = require('fs');

const readline = require('readline');

// Create a readable stream from the file

const fileStream = fs.createReadStream('example.txt', 'utf8');

// Create a readline interface to process the file line by line

const rl = readline.createInterface({

  input: fileStream,

  output: process.stdout,

  terminal: false

});
// Flag to read only the first line

let firstLineRead = false;

// Read the first line

rl.on('line', (line) => {

  // console.log('First Line:', line);

  if (!firstLineRead) {

    console.log('First Line:', line);

    firstLineRead = true;

    rl.close();

  }

});
