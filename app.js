'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
  fs.appendFileSyinc(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSyinc(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSyinc(fileName, 'こんばんは\n', 'utf8', () => {});
}
