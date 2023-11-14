'use strict';
const fs = require('node:fs');

function cat(fileName) {
  new Promise(resolve => {
    fs.readFile(fileName, 'utf8', (err, content) => {
      resolve(content);
    });
  }).then(content => {
    console.log(content || '指定されたファイルが見つかりません');
  });
}

cat(process.argv[2]);