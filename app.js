'use strict';
const fs = require('node:fs');

/**
 * For Promise chain
 * function cat(fileName) {
 *  const content = fs.promises.readFile(fileName, 'utf8').then(() => {
 *    console.log(content);
 *  });
 * }
 * cat(process.argv[2]);
 */

// For async/await
async function cat(fileName) {
  const content = await fs.promises.readFile(fileName, 'utf8');
  console.log(content);
}

cat(process.argv[2]);