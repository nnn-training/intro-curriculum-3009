'use strict';
const fs = require('fs');
const { resolve } = require('path');
const fileName = './test.txt';

/**
 * Promiseのみを用いて同期処理にする
 * ただしうまくいかない
 */
// function appendFilePromise(fileName, str) {
//   return new Promise ((resolve, reject) => {
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }

// for (let count = 0; count < 30; count++) {
//   appendFilePromise(fileName, 'おはようございます\n')
//     .then(() => {
//       return appendFilePromise(fileName, 'こんにちは\n');
//     })
//     .then(() => {
//       return appendFilePromise(fileName, 'こんばんは\n');
//     })
// }

/**
 * async/awaitで同期処理にする
 */

function appendFilePromise(fileName, str) {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

async function main() {
  for (let count = 0; count < 30; count++) {
    await appendFilePromise(fileName, 'おはようございます\n');
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n');
  };
}

main();