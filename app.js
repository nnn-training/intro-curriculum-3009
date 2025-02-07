'use strict';
const fs = require('node:fs');

function catSync(fileName) {
  const content = fs.readFileSync(fileName, 'utf8');
  console.log(content);
}
function catChain1(fileName) {
  fs.promises.readFile(fileName, 'utf8').then(console.log);
}
function catCahin2(fileName) {
  const promise = new Promise((resolve)=> {
    fs.readFile(fileName, 'utf8', (err, data)=>{
      return resolve(data)
    });
  });
  promise.then(console.log);
}
async function catAsync(fileName) {
  const content = await fs.promises.readFile(fileName, 'utf8');
  console.log(content);
}
const argv = process.argv;
switch(argv[2]){
  default : {
    catSync(argv[2]);
    break;
  }
  case 'sync' : {
    catSync(argv[3]);
    break;
  }
  case 'chain1' : {
    catChain1(argv[3]);
    break;
  }
  case 'chain2' : {
    catCahin2(argv[3]);
    break;
  }
  case 'async' : {
    catAsync(argv[3]);
    break;
  }
}