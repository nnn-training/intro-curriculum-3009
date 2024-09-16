'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf-8', () => resolve());
  });
}

function promiseWrite() {
  let promiseChain = Promise.resolve();
  for (let count = 0; count < 10; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, 'Promise おはようございます\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'Promise こんにちは\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'Promise こんばんは\n');
      });
  }
  return promiseChain;
}

async function asyncAwaitWrite() {
  for (let count = 0; count < 10; count++) {
    await appendFilePromise(fileName, 'async/await おはようございます\n');
    await appendFilePromise(fileName, 'async/await こんにちは\n');
    await appendFilePromise(fileName, 'async/await こんばんは\n');
  }
}

for (let count = 0; count < 10; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => { });
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => { });
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => { });
}
promiseWrite().then(() => {
  asyncAwaitWrite();
});
