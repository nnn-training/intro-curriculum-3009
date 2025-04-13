'use strict';
const { promises } = require('node:dns');
const fs = require('node:fs');

function ls(path) {
  /* fs.promises.readdir を使って path にある
    ファイルとディレクトリの一覧を取得し、
    console.log で表示する。
    Promise チェーンで実装する。*/
  const promise = fs.promises.readdir(path, 'utf8');
    promise.then(files => {
      for(const file of files){
        console.log(file);
      }
    });
}

async function ls2(path) {
  /* fs.promises.readdir を使って path にある
    ファイルとディレクトリの一覧を取得し、
    console.log で表示する。
    async/await で実装する。*/
  const files = await fs.promises.readdir(path, 'utf8');
  for(const file of files) {
    console.log(file);
  }
}

// 実行例
// 同じものが表示されれば OK
ls('.');
ls2('.');



//　問題２
'use strict';

function sleep(sec) {
  /* ここを埋めてください */
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sec*1000);
  }); 
}

// 動作確認
async function main() {
  console.log("3秒後にお前は『おにぎりおいしい』という！");
  // ここでは 3 秒 sleep させてください。
  await sleep(3);
  console.log("おにぎりおいしい");
  // ここでは 1 秒 sleep させてください。
  await sleep(1);
  console.log("…ハッ！");
}

main();




// 問題３
'use strict';
const fs = require('node:fs');

function writeToFile(content) {
  /* fs.appendFile を用いて、content を dwango.txt に
     書き込み、Promise オブジェクトを返す。*/
  return new Promise((resolve, reject) => {
    fs.appendFile('dwango.txt', content, 'utf8', resolve);
  })
}

// この関数の実装は仮のものなので、適切に修正すること。
async function main() {
  for (let count = 0; count < 2525; count++) {
    await writeToFile('ド');
    await writeToFile('ワ');
    await writeToFile('ン');
    await writeToFile('ゴ');
    await writeToFile('\n');
  }
}

main();
