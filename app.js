"use strict";

console.log("3009 started");
const fs = require("fs");
const fileName = "./test.txt";
// for (let count = 0; count < 30; count++) {
//   fs.appendFileSync(fileName, "おはようございます\n", "utf8", () => {});
//   fs.appendFileSync(fileName, "こんにちは\n", "utf8", () => {});
//   fs.appendFileSync(fileName, "こんばんは\n", "utf8", () => {});
// }

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, "utf8", () => resolve());
  });
}

async function main() {
  for (let i = 0; i < 50; i++) {
    await appendFilePromise(fileName, "おはようございます\n");
    await appendFilePromise(fileName, "こんにちは\n");
    await appendFilePromise(fileName, "こんばんは\n");
    await appendFilePromise(fileName, "---next day---\n");
  }
}
main();
