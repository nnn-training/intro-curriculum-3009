'use strict';

function appendFilePromise(fs, fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
async function writeGreeting(fs, fileName) {
  for (let count = 0; count < 30; count++) {
    await appendFilePromise(fs, fileName, 'おはようございます\n');
    await appendFilePromise(fs, fileName, 'こんにちは\n');
    await appendFilePromise(fs, fileName, 'こんばんは\n');
  }
}

const fs = require('fs');
const fileName = './test.txt';
writeGreeting(fs, fileName);