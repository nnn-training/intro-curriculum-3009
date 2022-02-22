'use strict';
const fs = require('fs');
const fileName = './test.txt';

function mojiPromise(str){
  return new Promise((resolve) =>{
  fs.appendFile(fileName,str,'utf8',()=> resolve());//resolveの中身はないがプロミスの書き方として最後にresolveをかくこれを書くと処置が終わったことがわかる？？
  });
}
async function main(){//asyncは関数の中でしか動かない
 for (let count = 0; count < 30; count++) {
  await mojiPromise('おはようございます\n');//awaitはpromiseでしか動かないが関数で定義して返してあげたものでもOK
  await mojiPromise('こんにちは\n');
  await mojiPromise('こんばんは\n');
 }//awaitはresolveが実行されるまで待つので最後にかかないとダメ
}

main();
