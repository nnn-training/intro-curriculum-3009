'use strict';
const fs = require('fs');
const fileName = './test-async.txt';

// async/await を利用する
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
async function main_async() {
  for (let count = 0; count < 100; count++) {
    await appendFilePromise(fileName, 'おはようございます！\n');
    await appendFilePromise(fileName, 'こんにちは！\n');
    await appendFilePromise(fileName, 'こんばんは！\n');
  }
}
main_async();
