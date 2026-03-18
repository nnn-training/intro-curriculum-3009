'use strict';
const fs = require('node:fs');

function read(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      resolve(data);
    });
  });
}

async function cat(fileName) {
  const content = await read(fileName);
  console.log(content);
}

cat(process.argv[2]);