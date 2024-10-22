'use strict';
const fs = require('node:fs');

function cat(fileName) {
  const promise = new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', (err, content) => {resolve(content)})
  })
  promise.then((resolve) => {
    console.log(resolve)
  })
}

cat(process.argv[2]);