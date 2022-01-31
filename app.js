'use strict';
const fs = require('fs');
const fileName = './test.txt';

/**
 * ファイルに文字を書き込むプロミスを返す
 * @param {string} fileName
 * @param {string} str
 * @return {Promise}
 */
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', resolve);
  });
}

/**
 * main関数
 */
async function main() {
  for (let count = 0; count < 30; count++) {
    await appendFilePromise(fileName, 'おはようございます\n');
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n');
  }
}

main();