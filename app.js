'use strict';
const fs = require('fs');
const fileName = './test.txt';
//appendFileSyncを用いる
for (let count = 0; count < 10; count++) {
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
}


//Promiseを用いる
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf-8', () => resolve());
  });
}
function main() {
  let promiseChain = Promise.resolve();
  for (let count = 0; count < 10; count++) {
    promiseChain = promiseChain
    .then(() => {
      return appendFilePromise(fileName, 'こんにちは\n');
    })
    .then(() => {
      return appendFilePromise(fileName, 'こんばんは\n');
    })
    .then(() => {
      return appendFilePromise(fileName, 'おはようございます\n');
    });
  }
}
main();


//async,awaitを用いる(上のと衝突した為起動はしていない)
async function main2() {
  for (let count = 0; count < 10; count++) {
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n');
    await appendFilePromise(fileName, 'おはようございます\n');
  }
};