'use strict';
const fs = require('fs');
const { resolve } = require('path'); //勝手に生成される
const fileName = './test.txt';

function appendFilePromise(fileName, str){
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf-8', () => resolve());
  });
}

function main(){
  let promiseChain = Promise.resolve(); //new Promiseを簡略化?
  for (let count = 0; count < 30; count++) {
    promiseChain = promiseChain
      .then(() =>{
        return appendFilePromise(fileName, 'おはようございます\n')
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんにちは\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんばんは\n');
      })
  }
}

main();