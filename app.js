'use strict';
const fs = require('fs');
const fileName = './test.txt';
/* appendFileSync----------------------------------------*/
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}
/* async/await-----------------------------------------*/
function appendFilePromise(str){
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  })
}

async function main(){
  for(let count = 0; count < 30; count++){
    await appendFilePromise('おはようございます\n');
    await appendFilePromise('こんにちは\n');
    await appendFilePromise('こんばんは\n');
  }
}
main();
/* Promise----------------------------------------*/
/*
new Promise((resolve) =>{
  const msg1 = 'おはようございます\n';
  resolve(msg1);  
})
  .then((value1) =>{
    const msg2 = 'こんにちは\n';
    return new Promise((resolve) =>{
      resolve(value1 + msg2);  
    })
  })
  .then((value2) =>{
    const msg3 = 'こんばんは\n';
    console.log(value2 + msg3);
  })
*/
function appendFilePromise(str){
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  })
}
for(let count = 0; count < 30; count++){
  appendFilePromise('おはようございます\n')
  .then(()=>{
    return appendFilePromise('こんにちは\n');
  })
  .then(() =>{
    return appendFilePromise('こんばんは\n');
  })
}
