'use strict';
const fs = require('fs');
const fileName = './test.txt';


// appendFileSync 版

for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}


// Promise のみ版

// > 一応、以前までの Promise の状態を変数としてもつことで解決できますが、綺麗な書き方にはなりません。
// ということなので、まずは変数を使わないことのダメさを確認。

/* // ダメ1
for (let count = 0; count < 30; count++) {
  new Promise(rslv => {
    fs.appendFile(fileName, `おはようございます ${count}\n`, 'utf8', rslv);
  }).then(() => {
    new Promise(rslv => {
      fs.appendFile(fileName, `こんにちは ${count}\n`, 'utf8', rslv);
    }).then(() => {
      new Promise(rslv => {
        fs.appendFile(fileName, `こんばんは ${count}\n`, 'utf8', () => {});
      });
    });
  });
}
*/
/* // ダメ2
for (let count = 0; count < 30; count++) {
  new Promise(rslv => {
    fs.appendFile(fileName, `おはようございます ${count}\n`, 'utf8', rslv);
  }).then(() => {
    return new Promise(rslv => {
      fs.appendFile(fileName, `こんにちは ${count}\n`, 'utf8', rslv);
    });
  }).then(() => {
    return new Promise(rslv => {
      fs.appendFile(fileName, `こんばんは ${count}\n`, 'utf8', rslv);
    });
  });
}
*/
/* // ダメ3
for (let count = 0; count < 30; count++) {
  new Promise(rslv => {
    fs.appendFile(fileName, `おはようございます ${count}\n`, 'utf8', () => {
      new Promise(rslv => {
        fs.appendFile(fileName, `こんにちは ${count}\n`, 'utf8', () => {
          new Promise(rslv => {
            fs.appendFile(fileName, `こんばんは ${count}\n`, 'utf8', () => {});
          });
        });
      });
    });
  });
}
*/
/* // ダメ4（ほぼダメ2と同じ）
function appendFilePromise(fileName, str) {
  return new Promise(rslv => {
    fs.appendFile(fileName, str, 'utf8', rslv);
  });
}
for (let count = 0; count < 30; count++) {
  appendFilePromise(fileName, `おはようございます ${count}\n`)
    .then(() => {
      return appendFilePromise(fileName, `こんにちは ${count}\n`);
    })
    .then(() => {
      return appendFilePromise(fileName, `こんばんは ${count}\n`);
    });
}
*/

// ということで変数による方法を考えてみたが、各ループ1発目の「おはようございます」が同一Promise下にない以上同期処理になりようがないと考えて同一Promiseへのチェーンっぽくしてみるも、ファイルすら作られずダメだった。
/*
function appendFilePromise(fileName, str) {
  return new Promise(rslv => {
    fs.appendFile(fileName, str, 'utf8', rslv);
  });
}
let pr = new Promise(() => {});
for (let count = 0; count < 30; count++) {
  pr
    .then(() => {
      return appendFilePromise(fileName, `おはようございます ${count}\n`);
    })
    .then(() => {
      return appendFilePromise(fileName, `こんにちは ${count}\n`);
    })
    .then(() => {
      return appendFilePromise(fileName, `こんばんは ${count}\n`);
    });
}
*/

// 状態のみの変数を持つとなるとなお悪く、こんなクソなのしか思いつかなかった上に普通に無限ループしちゃってダメだった。
/*
function appendFilePromise(fileName, str) {
  return new Promise(rslv => {
    fs.appendFile(fileName, str, 'utf8', rslv);
  });
}
const isDone = [];
isDone[-1] = true;
for (let count = 0; count < 30; count++) {
  while (!isDone[count]) {
    if (isDone[count - 1]) {
      appendFilePromise(fileName, `おはようございます ${count}\n`)
        .then(() => {
          return appendFilePromise(fileName, `こんにちは ${count}\n`);
        })
        .then(() => {
          return appendFilePromise(fileName, `こんばんは ${count}\n`);
        })
        .then(() => {
          isDone[count] = true;
        });
    }
  }
}
*/

// というわけで降参。
// 以下、やや改変しつつ写経。
/*
function appendFilePromise(fileName, str) {
  return new Promise(rslv => {
    fs.appendFile(fileName, str, 'utf8', rslv);
  });
}
// function main() { // このラップは別になくても動いた。
let promiseChain = Promise.resolve(); // 発想は合ってたじゃん！！！！
for (let count = 0; count < 30; count++) { // 教材が500になってる～！
  promiseChain = promiseChain
    .then(() => {
      return appendFilePromise(fileName, `おはようございます ${count}\n`);
    })
    .then(() => {
      return appendFilePromise(fileName, `こんにちは ${count}\n`);
    })
    .then(() => {
      return appendFilePromise(fileName, `こんばんは ${count}\n`);
    });
}
// }
// main();
 */


// appendFileSync 版

/*
function appendFilePromise(fileName, str) {
  return new Promise(rslv => {
    fs.appendFile(fileName, str, 'utf8', rslv);
  });
}
async function main() {
  for (let count = 0; count < 30; count++) {
    await appendFilePromise(fileName, `おはようございます ${count}\n`);
    await appendFilePromise(fileName, `こんにちは ${count}\n`);
    await appendFilePromise(fileName, `こんばんは ${count}\n`);
  }
}

main();
*/