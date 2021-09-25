'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
async function main() {
  for (let count = 0; count < 50; count++) {
    await appendFilePromise(fileName, '0.・・・・・\n');
    await appendFilePromise(fileName, '1.おはよう！\n');
    await appendFilePromise(fileName, '2.こんにちは\n');
    await appendFilePromise(fileName, '3.こんばんは\n');
  }
}
main();