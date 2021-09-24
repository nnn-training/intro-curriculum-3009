'use strict';
const fs = require('fs');
const fileName = './test.txt';

/************** appendFileSync仕様 動作確認済み ****************
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}
*/

/************** Promise構文仕様　動作確認済み　***************
/**
 * @param {var} fileName (test.textへのパス)
 * @param {str} greeting 
 * @return 指定したファイルに挨拶を出力したらresolve関数を返すPromiseオブジェクト
 */
 function appendFilePromise(fileName, greeting) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, greeting, 'utf8', () => resolve());
  });
}
function main() {
  let resolvedPromise = Promise.resolve(); //Promiseのメソッド .resolve()は解決済みのオブジェクトを返す
  for (let count = 0; count < 30; count++) {
    //解決済みになったPromiseオブジェクトにthenメソッドをつなげ、さらにそれが解決したら次のthenメソッドに繋がる
    resolvedPromise = resolvedPromise
      .then(() => {
        return appendFilePromise(fileName, 'Good morning!\n')
      })
      .then(() => {
        return appendFilePromise(fileName, 'Good afternoon!\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'Good evening!\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'Good night!\n');
      });
  }
}
main();

/************** async/await構文仕様　動作確認済み　**************
function appendFilePromise(fileName, greeting){
  return new Promise((resolve) => {
    fs.appendFile(fileName, greeting, 'utf8', ()=>resolve());
  });
}
async function main(){
  for(let count = 0; count<30; count++){
    await appendFilePromise(fileName, 'Bonjour!\n')
    await appendFilePromise(fileName, 'Salut!\n')
    await appendFilePromise(fileName, 'Bonsoir!\n')
  }
}
main();
*/