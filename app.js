"use strict";
const fs = require("fs");
const fileName = "./test.txt";

const sayGreetings = (filename, greeting) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, greeting, "utf-8", () => {
      resolve();
    });
  });
};

const createGreetingsFile = async () => {
  for (let count = 0; count < 30; count++) {
    await sayGreetings(fileName, "おはようございます\n");
    await sayGreetings(fileName, "こんにちは\n");
    await sayGreetings(fileName, "こんばんは\n");
  }
};

createGreetingsFile();
