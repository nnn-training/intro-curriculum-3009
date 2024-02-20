'use strict';
const fs = require('node:fs').promises;

async function cat(fileName) {
  console.log(await fs.readFile(fileName, 'utf8'));
}

cat(process.argv[2]);