'use strict';
const fs = require('fs');
const fileName = './test.txt';

// fs.appendFileをPromiseオブジェクト化している関数appendFilePromise
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

// async function でmainが非同期関数だと宣言
// main関数内でawait演算子が使用可能
async function main() {
  for (let count = 0; count < 30; count++) {
    // await演算子によって、Promiseの完了を待ってから次の行の処理へ進む
    await appendFilePromise(fileName, 'おはようございます\n');
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n');
  }
}

main();