'use strict';
'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
}

//　async/awaitを使った場合
const appendFile = './appendFile.txt';

function appendFilePromise(appendFile, str) {
  return new Promise((resolve) => {
    fs.appendFile(appendFile, str, 'utf8', () => resolve());
  });
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(appendFile, 'おはようございます\n');
        await appendFilePromise(appendFile, 'こんにちは\n');
        await appendFilePromise(appendFile, 'こんばんは\n');
    }
}

main();