'use strict';
const fs = require('fs');
const fileName = './test.txt';

// aync/awaitを使った場合
// function appendFilePromise(fileName, str) {
//   return new Promise((resolve) => {
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }

// async function main() {
//   for (let count = 0; count < 30; count++) {
//       await appendFilePromise(fileName, 'おはようございます\n');
//       await appendFilePromise(fileName, 'こんにちは\n');
//       await appendFilePromise(fileName, 'こんばんは\n');
//   }
// }

// main();

for (let count = 0; count < 30; count++) {
  // 同期IOのappendFileSyncなら順番に実行される
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});

  // appendFilePromiseだけだと出力が順番通りにされない
  // appendFilePromise(fileName, 'おはようございます\n')
  //   .then(() => {
  //     return appendFilePromise(fileName, 'こんにちは\n');
  //   })
  //   .then(() => {
  //     return appendFilePromise(fileName, 'こんばんは\n');
  //   })
}
