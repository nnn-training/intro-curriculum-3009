"use strict";
const fs = require("fs");
const fileName = "./test.txt";

const appendFileAsync = (fileName, str) => {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, "utf-8", () => resolve());
  });
};
(async () => {
  for (let count = 0; count < 30; count++) {
    await appendFileAsync(fileName, "おはようございます\n");
    await appendFileAsync(fileName, "こんにちは\n");
    await appendFileAsync(fileName, "こんばんは\n");
  }
})();
