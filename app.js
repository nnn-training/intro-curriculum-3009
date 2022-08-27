'use strict';
const fs = require('fs');
const fileName = './test.txt';

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