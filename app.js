'use strict';
const fs = require('fs');
// const fileName = './test.txt';
// appendFile のまま実行すると、「おはよう」「こんにちは」「こんばんは」の順番にならない
const fileName2 = './test2.txt';
const fileName3 = './test3.txt';

//appendFileSyncを使った同期処理
for(let count = 0; count < 5; count++) {
  fs.appendFileSync(fileName2, '①お~っは\n', 'utf8', () => {});
  fs.appendFileSync(fileName2, '②こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName2, '③こんばんは\n', 'utf8', () => {});
}

//await は Promise の結果を待つものなので、Promiseは必要です
//promise async awaitを使った書き方
function appnedFIlePromise(fileName3, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName3,str,'utf8', () => resolve());
  });
}
async function main(){
  for(let count = 0; count < 5; count++){
    await appnedFIlePromise(fileName3,'1おはよう\n');
    await appnedFIlePromise(fileName3,'2こんにちは\n');
    await appnedFIlePromise(fileName3, '3こんばんは\n'); 
  };
};

main();