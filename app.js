'use strict';
const fs = require('node:fs');

async function cat(fileName) {
  const content = await fs.readFileSync(fileName, 'utf8', () => { });
  console.log(content);
}

cat(process.argv[2]);