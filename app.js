'use strict';
const fs = require('fs');
const fileName = './test.txt';
// for (let count = 0; count < 30; count++) {
//   fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
//   fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
//   fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
// }

console.log('-------------------------------------------------------------------------');

for (let i = 0; i < 30; i++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf-8');
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf-8');
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf-8');
}

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });s
}

async function main() {
  for (let i = 0; i < 30; i++) {
    await appendFilePromise(fileName, 'おはようございます\n');
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n');
  }
}

main();