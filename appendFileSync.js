'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 50; count++) {
  fs.appendFileSync(fileName, '0.・・・・・\n', 'utf8', () => {});
  fs.appendFileSync(fileName, '1.おはよう！\n', 'utf8', () => {});
  fs.appendFileSync(fileName, '2.こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, '3.こんばんは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, '4.・・・・・\n', 'utf8', () => {});
}
