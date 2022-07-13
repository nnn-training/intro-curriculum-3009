'use strict';
const fs = require('fs');
const { resolve } = require('path');
const fileName = './test.txt';

for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます1\n', 'utf8');
  fs.appendFileSync(fileName, 'こんにちは1\n', 'utf8');
  fs.appendFileSync(fileName, 'こんばんは1\n', 'utf8');
}

function appendFilePromise(fileName, str) {
  return new Promise(resolve => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

function main() {
  let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
  for (let count = 0; count < 30; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, 'おはようございます2\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんにちは2\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんばんは2\n');
      });
  }
}
// main();

async function main2() {
  for (let count = 0; count < 30; count++) {
    await appendFilePromise(fileName, 'おはようございます3\n');
    await appendFilePromise(fileName, 'こんにちは3\n');
    await appendFilePromise(fileName, 'こんばんは3\n');
  }
}
main2();