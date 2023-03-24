'use strict';
const fs = require('fs');
const fileName = './test.txt';

/**
 * appendFileSyncを使う方法
 */
/*
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}
*/

/**
 * Promiseを使う方法
 */
/*
function appendFilePromise(fileName, str) {
  return new Promise(resolve => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

function main () {
  let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
  for (let count = 0; count < 30; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, 'おはようございます\n')
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんにちは\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんばんは\n');
      });
  }
}

main();
*/


/**
 * async/awaitを使う方法
 */

function appendFilePromise(fileName, str) {
  return new Promise(resolve => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

async function main () {
  for(let count = 0; count < 30; count++) {
    await appendFilePromise(fileName, 'おはようございます\n');
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n')
  }
}

main();
