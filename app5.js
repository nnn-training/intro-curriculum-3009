'use strict';
const fs = require('fs');
const fileName = './test5.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    })
}

// Promiseの状態を変数として持つ
let promise = new Promise((resolve) => resolve()); 
// Promiseを30個数珠つなぎにする
for (let count = 0; count < 30; count++) {
    promise = promise.then(() => {
        return appendFilePromise(fileName, 'おはようございます\n');
    })
    .then(() => {
        return appendFilePromise(fileName, 'こんにちは\n');
    })
    .then(() => {
        return appendFilePromise(fileName, 'こんばんは\n'); 
    })
}
