'use strict';
const fs = require('node:fs');

function cat(fileName) {
  const content = fs.readFileSync(fileName, 'utf8', () => {});
  console.log(content);
}

cat(process.argv[2]);