'use strict';
const fs = require('fs');
const fileName = './test.txt';

//appendFileSyncで実装
//for (let count = 0; count < 30; count++) {
//  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
//  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
//  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
//}

//Promiseで実装
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
function main() {
  let promiseChain = Promise.resolve();
  for (let count = 0; count < 500; count++) {
    promiseChain = promiseChain
    .then(() => {
      return appendFilePromise(fileName, 'おはよう\n');
    })
    .then(() => {
      return appendFilePromise(fileName, 'こんちは\n');
    })
    .then(() =>{
      return appendFilePromise(fileName, 'ばんちゃ\n');
    });
  }
}
main();