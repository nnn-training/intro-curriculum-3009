'use strict';
const fs = require('fs');
const fileName = './test.txt';
const appendFilePromise = fileName => async str => {
  await new Promise(resolve => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
};

const main = async () => {
  const append = appendFilePromise(fileName);
  const words = ['おはようございます\n', 'こんにちは\n', 'こんばんは\n'];

  for (let count = 0; count < 500; count++) {
    await words.reduce((promiseChain, word) => {
      return promiseChain.then(() => {
        return append(word);
      });
    }, Promise.resolve());
  }
};

main();
