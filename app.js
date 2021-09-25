'use strict';
const fs = require('fs');
const fileName = './test.txt';
const afsfileName = './test2.txt';
const promiseFileName = './test3.txt';

for (let count = 0; count < 30; count++) {
  fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
}

//appendFileSyncを使った書き方
for(let count = 0; count < 30; count++) {
  fs.appendFileSync(afsfileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(afsfileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(afsfileName, 'こんばんは\n', 'utf8', () => {}); 
}

//async awaitを使った書き方
function appnedFIlePromise(promiseFileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(promiseFileName,str,'utf8', () => resolve());
  });
}

async function main(){
  for(let count = 0; count < 30; count++){
    await appnedFIlePromise(promiseFileName,'おはようございます\n');
    await appnedFIlePromise(promiseFileName,'こんにちは\n');
    await appnedFIlePromise(promiseFileName, 'こんばんは\n'); 
  };
};

main();

//Promiseのみを使った書き方
const promiseNomiFileName = './test4.txt';
function appnedFilePromiseNomi(promiseNomiFileName,str) {
  return new Promise((resolve) => {
    fs.appendFile(promiseNomiFileName,str,'utf8', () => resolve());
  });
}
function mainPromise(){
  let promiseChain = Promise.resolve(); //Promiseチェーンを記憶する変数
  for(let count = 0; count < 500; count++) {
    promiseChain = promiseChain
    .then(() => {
      return appnedFilePromiseNomi(promiseNomiFileName,'おはようございます\n');
    })
    .then(() => {
      return appnedFilePromiseNomi(promiseNomiFileName,'こんにちは\n');
    }).then(() => {
      return appnedFilePromiseNomi(promiseNomiFileName,'こんばんは\n');
    });
  }
}

mainPromise();
