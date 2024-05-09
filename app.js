'use strict';
const fs = require('node:fs');

/*
async function cat(fileName) {
  const content = await fs.readFileSync(fileName, 'utf8', () => {});
  console.log(content);
}
*/

async function cat(fileName) {
  const content = await fs.promises.readFile(fileName,'utf8', () => {});
  console.log(content);
}

cat(process.argv[2]);