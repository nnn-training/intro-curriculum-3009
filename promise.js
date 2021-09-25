'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
function main() {//promiseチェーン
  let promiseChain = Promise.resolve(); 
  for (let count = 0; count < 50; count++) {
    promiseChain = promiseChain
      .then(() => {return appendFilePromise(fileName, '1.オハヨウ\n');})
      .then(() => {return appendFilePromise(fileName, '2.コンチハ\n');})
      .then(() => {return appendFilePromise(fileName, '3.コンバハ\n');});
  }
}
main();