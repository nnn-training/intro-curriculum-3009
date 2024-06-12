'use strict';
const fs = require('fs');

function appendFile(filename,text){
  return new Promise((resove) => {
    fs.appendFile(filename,text,'utf8',() => resove());
  });
}
async function main(){
  const fileName = './test.txt';
  for(let count=0; count<30; count++){
    await appendFile(fileName, 'おはようございます\n');
    await appendFile(fileName, 'こんにちは\n');
    await appendFile(fileName, 'こんばんは\n');
  
  }
}

main();