"use strict";
const fs = require("fs");
const fileName = "./test.txt";
// for (let count = 0; count < 30; count++) {
//   fs.appendFileSync(fileName, "おはようございます\n", "utf8", () => {});
//   fs.appendFileSync(fileName, "こんにちは\n", "utf8", () => {});
//   fs.appendFileSync(fileName, "こんばんは\n", "utf8", () => {});
// }

function asyncFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, "utf-8", resolve());
  });
}

async function main() {
  for (let i = 0; i < 50; i++) {
    await asyncFilePromise(fileName, "おはようございます\n");
    await asyncFilePromise(fileName, "こんにちは\n");
    await asyncFilePromise(fileName, "こんばんは\n");
    await asyncFilePromise(fileName, "---next day---\n");
  }
}
main();
