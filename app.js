'use strict';
const fs = require('fs');
const fileName = './test.txt';
/*for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}
//*/

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
//Promise.resolve は resolve が呼ばれた状態の Promise オブジェクトを返す関数
function main() {
  let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
  for (let count = 0; count < 200; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, 'おはようございます\n');
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

//async/await を使った例
/*
function appendFilePromise(fileName, str) {
  // await を使うためには Promise オブジェクトにしなければならない
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
async function main() {
  for (let count = 0; count < 200; count++) {
  await appendFilePromise(fileName, 'おはようございます\n');
  await appendFilePromise(fileName, 'こんにちは\n');
  await appendFilePromise(fileName, 'こんばんは\n');
  }
}


//↑のコードの改善前。function appendFilePromise(fileName, str) { でまとめた
await new Promise(
  resolve => {
    fs.appendFile(filename, '', 'utf8', () => {
      resolve(); //await は resolve() が実行されるまで待つ
    });
  }
main();
//*/