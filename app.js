'use strict';
const fs = require('fs');
const fileName = './test.txt';

// 1. Sync メソッド
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}

// 2. Promise チェイン
function appendFilePromise(fileName, str) {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
/**
 * ★ resolve の処理結果（Promise オブジェクト）を変数Promise として保持する
 *  → 変数としてPromise の状態を持っておかないと、朝ご飯 朝ご飯...お昼ご飯 お昼ご飯....となる
 *  （2020年のフォーラムのらべねこ先生の回答を参考にしました）
 */
let promise = new Promise((resolve) => { resolve(); }); // Promise.resolve() メソッドでも取得可
for (let count = 0; count < 30; count++) {
  // Promise チェインを使って、変数Promise に代入する
  promise = promise
    .then(() => {
      return appendFilePromise(fileName, '朝ご飯\n')
    })
    .then(() => {
      return appendFilePromise(fileName, 'お昼ご飯\n')
    })
    .then(() => {
      return appendFilePromise(fileName, '夕飯\n')
    });
}

// 3. async/await 構文
function appendFilePromise_2(fileName, str) {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
async function main() {
  for (let count = 0; count < 30; count++) {
    await appendFilePromise_2(fileName, 'Good morning.\n');
    await appendFilePromise_2(fileName, 'Good afternoon.\n');
    await appendFilePromise_2(fileName, 'Good evening.\n');
  }
}
promise.then(() => main()); // Promise チェインの処理が終了してから実行する