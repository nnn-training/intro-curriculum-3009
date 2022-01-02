'use strict';
const fs = require('fs');
const fileName = './test.txt';

/* appendFileSyncでの記述 ---------------- */
// for (let count = 0; count < 30; count++) {
//   fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
//   fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
//   fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
// }

/* promiseでの記述 ---------------------- */
function appendFilePromise(fileName, str){
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

function main(){
  appendFilePromise(fileName, 'promiseでの記述----------------------\n');
  let promiseChain = Promise.resolve();
  for(let count = 0; count < 30; count++){
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


/* async/awaitでの記述 ---------------------- */
// function appendFilePromise(fileName, str){
//   return new Promise((resolve) => {          //awaitを利用するにはPromiseが必要
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }

// async function main() {
//   appendFilePromise(fileName, 'async/awaitでの記述----------------------\n');
//   for (let count = 0; count < 30; count++) {
//     await appendFilePromise(fileName, 'おはようございます\n');
//     await appendFilePromise(fileName, 'こんにちは\n');
//     await appendFilePromise(fileName, 'こんばんは\n');
//   }
// }

// main();