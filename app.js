'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
}


// async/await
const fileName2 = './test2.txt';
async function appendFileSyncFuncAsyncAwait(){
  function appendFileSyncFunc(fileName, text){
    return new Promise((resolve, reject) => {
      try {
        fs.appendFile(fileName, text, 'utf8', () => {return resolve();});
      } catch (error) {
        return reject();
      }
    });
  }

  for (let count = 0; count < 30; count++) {
    await appendFileSyncFunc(fileName2, 'おはようございます\n');
    await appendFileSyncFunc(fileName2, 'こんにちは\n');
    await appendFileSyncFunc(fileName2, 'こんばんは\n');
  }
}

appendFileSyncFuncAsyncAwait();


// Promise
const fileName3 = './test3.txt';
function appendFileSyncFuncPromise(){
  function appendFileSyncFunc(fileName, text){
    return new Promise((resolve, reject) => {
      try {
        fs.appendFile(fileName, text, 'utf8', () => {return resolve();});
      } catch (error) {
        return reject();
      }
    });
  }

  // なんでソウナルノ？
  for (let count = 0; count < 30; count++) {
    appendFileSyncFunc(fileName3, 'おはようございます\n')
    .then(() => {return appendFileSyncFunc(fileName3, 'こんにちは\n');})
    .then(() => {return appendFileSyncFunc(fileName3, 'こんばんは\n');});
  }
}

appendFileSyncFuncPromise();
