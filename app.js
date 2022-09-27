'use strict';
const fs = require('fs');
const fileName = './test.txt';
const _fileName = './test1.txt';
const _fileName_ = './test2.txt';

// appendFileSync
for (let count = 0; count < 6; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
}


// Promise
function appendFilePromise(_fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(_fileName, str, 'utf8', () => resolve());
  });
}
function main() {
  let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
  for (let count = 0; count < 6; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(_fileName, 'おはようございます\n');
      })
      .then(() => {
        return appendFilePromise(_fileName, 'こんにちは\n');
      })
      .then(() => {
        return appendFilePromise(_fileName, 'こんばんは\n');
      });
  }
}
main();


// async/await
function appendFilePromise(_fileName_, str) {
  return new Promise((resolve) => {
    fs.appendFile(_fileName_, str, 'utf8', () => resolve());
  });
}
async function main1() {
  for (let count = 0; count < 6; count++) {
    await appendFilePromise(_fileName_, 'おはようございます\n');
    await appendFilePromise(_fileName_, 'こんにちは\n');
    await appendFilePromise(_fileName_, 'こんばんは\n');
  }
}
main1();