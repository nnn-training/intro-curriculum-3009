const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise( fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
  
let myPromise = new Promise((resolv)=>{resolv()}); 
for (let count = 0; count < 30; count++) {
    myPromise = myPromise.then(() => {
        return appendFilePromise( fileName, 'おはようございます\n');
    }).then(() => {
        return appendFilePromise( fileName, 'こんにちは\n');
    }).then(() => {
        return appendFilePromise( fileName, 'こんばんは\n');
    });
}
