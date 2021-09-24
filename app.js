'use strict';
const fs = require('fs');
const fileName = './test.txt';

// appendFileSyncを使った場合
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}

function appendFilePromise(fileName, str){
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

// Promiseのみを用いた場合
function mainPromise(){
  let promiseChain = Promise.resolve();
  for (let i = 0; i < 30; i++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, 'おはようございます\n')
      }).then(() => {
        return appendFilePromise(fileName, 'こんにちは\n')
      }).then(() => {
        return appendFilePromise(fileName, 'こんばんは\n')
      });
  }
}

// async/awaitを組み合わせた例
async function mainAsync(){
  for (let i = 0; i < 30; i++) {
    await appendFilePromise(fileName, 'おはようございます\n', 'utf8', () => {});
    await appendFilePromise(fileName, 'こんにちは\n', 'utf8', () => {});
    await appendFilePromise(fileName, 'こんばんは\n', 'utf8', () => {});
  }
}

new Promise((resolve) => {
  mainPromise();
}).then(() => {
  mainAsync();
});