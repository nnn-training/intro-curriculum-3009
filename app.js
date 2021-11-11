/**
 * 30回ファイルへの書き込みを行う
 *  その際、「おはようございます」「こんにちは」「こんばんは」の順番で出力できるようにする
 */
 'use strict';
 const fs = require('fs');
 const fileNameAppendSync = './test-append-sync.txt';
 const fileNamePromise = './test-promise.txt';
 const fileNameAsyncAwait  = './test-async-await.txt';

 // appendFileSync
for(let count = 0; count < 30; count++) {
  fs.appendFileSync(fileNameAppendSync, 'おはようございます\n', 'utf8');
  fs.appendFileSync(fileNameAppendSync, 'こんにちは\n', 'utf8');
  fs.appendFileSync(fileNameAppendSync, 'こんばんは\n', 'utf8');
}

// promise（わからん）
/**  自分でおこなったもの
const appdendPromise = new Promise(resolve => {
  fs.appendFile(fileNamePromise, 'おはようございます\n', 'utf8', () => resolve());
})
const appendPromise2 = new Promise(resolve => {
  fs.appendFile(fileNamePromise, 'こんにちは\n', 'utf8', () => resolve());
})
const appdendPromise3 = appendPromise2.then(() => {
  fs.appendFile(fileNamePromise, 'こんばんは\n', 'utf8', () => {});
});
const promiseArray = [appdendPromise, appendPromise2, appdendPromise3];
for(let count = 0; count < 30; count++) {
  return appendPromise3;
}
*/
// 回答
function appendFilePromise(fileName, str) {
  return new Promise(resolve => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  })
}
function appendFilePromiseMain() {
  let promiseChain = Promise.resolve();  // Promiseチェーンを記憶する変数
  for(let count = 0; count < 30; count++) {
    promiseChain = promiseChain
    .then(() => {
      return appendFilePromise(fileNamePromise, 'おはようございます\n');
    })
    .then(() => {
      return appendFilePromise(fileNamePromise, 'こんにちは\n');
    })
    .then(() => {
      return appendFilePromise(fileNamePromise, 'こんばんは\n');
    })
  }
}
appendFilePromiseMain();


// async await
function appendFileAyncAwait(fileName, str) {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  })
}
async function main() {
  for(let count = 0; count < 30; count++) {
    await appendFileAyncAwait(fileNameAsyncAwait, 'おはようございます\n');
    await appendFileAyncAwait(fileNameAsyncAwait, 'こんにちは\n');
    await appendFileAyncAwait(fileNameAsyncAwait, 'こんばんは\n');
  }
}
main();
