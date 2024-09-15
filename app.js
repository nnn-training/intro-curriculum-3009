'use strict';
const fs = require('fs');
const { resolve } = require('path');
const fileName = './test.txt';

// // appendFileSyncを用いた解答方法
// for (let count = 0; count < 30; count++) {
//   fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
//   fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
//   fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
// }

// async/awaitを用いた解答方法
// function appendFilePromise(fileName, str) {
//   return new Promise((resolve) => {
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }
// async function main() {
//   for(let count = 0; count < 30; count++){
//     await appendFilePromise(fileName, 'おはようございます\n');
//     await appendFilePromise(fileName, 'こんにちは\n');
//     await appendFilePromise(fileName, 'こんばんは\n');
//   }
// }
// 
// main();

// Promiseのみを用いた解答方法
// ※Promiseチェーンを記憶する変数とそのチェーンの使い方を理解できていなかった
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

function main() {
  let promiseChain = Promise.resolve(); // Promiseチェーンを記憶する変数
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