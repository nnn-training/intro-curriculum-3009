'use strict';
const fs = require('node:fs');

async function cat(fileName) {
  const files = await fs.promises.readFile(fileName, 'utf8');
  console.log(files);
}

cat(process.argv[2]);