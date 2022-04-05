// async/await 構文を用いた書き方
'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName,str) {
    return new Promise((resolve) => {
      fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
  }
  async function main() {
    for(let count = 0; count < 30; count++) {
      await appendFilePromise(fileName,'Good morning\n');
      await appendFilePromise(fileName,'Good afternoon\n');
      await appendFilePromise(fileName,'Good evening\n');
    }
  }
  main();