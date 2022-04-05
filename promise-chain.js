// Promise のみを用いた書き方
'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName,str) {
    return new Promise((resolve) => {
      fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
  }
  function main() {
    let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
    for(let count = 0; count < 30; count++) {
      promiseChain = promiseChain
        .then(() => {
          return appendFilePromise(fileName, '朝ご飯\n');
        })
        .then(() => {
          return appendFilePromise(fileName, 'お昼ご飯\n');
        })
        .then(() => {
          return appendFilePromise(fileName, '夕飯\n');
        });
    }
  }
  main();
  
  // (不正解）
  /*
  new Promise((resolve) => {
    const morning = fs.appendFile(fileName, '朝ご飯\n', 'utf8', () => {});
    resolve(morning);
  })
    .then((v1) => {
      const afternoon = fs.appendFile(fileName, 'お昼ご飯\n', () => {});
      return new Promise((resolve) => {
        resolve(afternoon);
      });
    })
    .then((v2) => {
      const evening = fs.appendFile(fileName, '夕飯\n', () => {});
      return new Promise((resolve) => {
        resolve(evening);
      });
    });
  */
  