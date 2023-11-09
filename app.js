'use strict';
const fs = require('node:fs');

function cat(fileName) {
  fs.promises.readFile(fileName, 'utf8').then((content) => {
    console.log(content);
  });
}

cat(process.argv[2]);