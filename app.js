'use strict';
const fs = require('fs');
const { resolve } = require('path');
const fileName = './test.txt';

// -- appendFileSync の例 --
// for (let count = 0; count < 30; count++) {
//   fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
//   fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
//   fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
// }

// -- async/await の例 --
function appendFilePromise(fileName, str) {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, str, 'utf8', () => {
      resolve();
    });
  })
}

async function main() {
  for (let count = 0; count < 30; count++) {
  await appendFilePromise(fileName, 'おはようございます\n');
  await appendFilePromise(fileName, 'こんにちは\n');
  await appendFilePromise(fileName, 'こんばんは\n');
  }
}

main();