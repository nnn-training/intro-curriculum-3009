'use strict';
const fs = require('node:fs');

function cat(fileName) {
  const content = fs.readFileSync(fileName, 'utf8', () => { });
  console.log(content);
}

async function cat2(fileName) {
  const content = await fs.promises.readFile(fileName, 'utf8', () => { });
  console.log(content);
}

// cat(process.argv[2]);
cat2(process.argv[2]);
