"use strict";
const fs = require("fs");
const fileName = "./test.txt";

function pms(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, "utf-8", () => resolve());
  });
}

(async function () {
  for (let count = 0; count < 30; count++) {
    await pms(fileName, "おはようございます\n");
    await pms(fileName, "こんにちは\n");
    await pms(fileName, "こんばんは\n");
  }
})();
