'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}

// 下記 async/await を使った手法だが、こっちの方が処理が遅く可読性も低い（time node app.jsでの測定結果比較）
// 'use strict';
// const fs = require('fs');
// const fileName = './test.txt';

// function appendFilePromise(fileName, str) {
//   return new Promise((resolve) => {
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }

// async function main(){
//   for (let count = 0; count < 30; count++) {
//     await appendFilePromise(fileName, 'おはようございます\n');
//     await appendFilePromise(fileName, 'こんにちは\n');
//     await appendFilePromise(fileName, 'こんばんは\n');
//   }
// }

// main()