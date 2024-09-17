'use strict';
const fs = require('fs');
const fileName = './test.txt';

// function appendFileSync(fileName, str){
//   return new Promise((resolve) => {
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }

// async function greet() {
  for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
  }
// }

// greet();

