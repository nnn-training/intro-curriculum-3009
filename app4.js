'use strict';
const fs = require('fs');
const fileName = './test4.txt';

// Promiseの状態を変数として持つ
let promise = new Promise((resolve) => resolve()); 

// Promiseを30個数珠つなぎにする
for (let count = 0; count < 30; count++) {
    promise = promise.then(() => {
        return new Promise((resolve) => {
            fs.appendFile(fileName,'おはようございます\n', 'utf8', () => resolve());
        })
    })
    .then(() => {
        return new Promise((resolve) => {
            fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => resolve());
        })
    })
    .then(() => {
        return new Promise((resolve) => {
            fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => resolve());
        }) 
    })
}

