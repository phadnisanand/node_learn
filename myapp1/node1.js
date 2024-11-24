const fs1 = require('fs');
 fs1.readFile('example.txt', 'utf-8',(error, data) => {
  if (error) {
    console.log(error);

  } else {
    console.log(data)
  }

});

