'use strict';
const fs = require('fs');
const fileName = './test.txt';

// appendFileSync を利用する
for (let count = 0; count < 100; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}
