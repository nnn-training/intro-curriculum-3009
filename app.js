'use strict';
const fs = require('fs');
const fileName = './test.txt';
function asyncAppendFile (fileName, str){
  return new Promise( (resolve) => {
    fs.appendFile(fileName, str , 'utf8', () => resolve());
  });
}

async function main(){
  for (let count = 0; count < 30; count++) {
    await asyncAppendFile(fileName, 'おはようございます\n');
    await asyncAppendFile(fileName, 'こんにちは\n');
    await asyncAppendFile(fileName, 'こんばんは\n');
  }
}

main();