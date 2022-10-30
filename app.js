'use strict';
const fs = require('fs');
const fileName = './test.txt';

// AppendFileSyncを用いたパターン
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}

//Promise + Async/Awaitを用いたパターン
function appendFilePromise(fileName) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
    fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
    fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
  });
}

async function main() {
  for (let count = 0; count < 30; count++) {
    await appendFilePromise(fileName);
  }
}

