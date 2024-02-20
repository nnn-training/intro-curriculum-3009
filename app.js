'use strict';
const fs = require('node:fs');

function cat(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, content) => {
      resolve(content);
    });
  })
}

cat(process.argv[2])
  .then((content) => {
    console.log(content);
});