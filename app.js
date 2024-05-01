'use strict';
const fs = require('node:fs');

function readFilePromise(fileName){
  return new Promise(
    (resolve,reject)=>{
      return fs.readFile(fileName, 'utf8',
      (err,data)=>{
        resolve(data)
      })
    }
  )
}

async function cat(fileName) {
  const content = await readFilePromise(fileName);
  console.log(content);
}

cat(process.argv[2]);