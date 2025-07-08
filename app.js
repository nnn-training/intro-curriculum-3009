'use strict';
const fs = require('node:fs');

function cat(fileName) {
  return new Promise ((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      resolve(data)
    });
  })
  .then((data) => {
    return console.log(data)
  });
}

cat(process.argv[2]);
