'use strict';
const fs = require('fs');
const fileName = './test7.txt';

function excutePromise(v) {
    return new Promise((resolve) => {
        console.log(v*3);
        fs.appendFile(fileName, 'おはようございます\n', 'utf-8', () => resolve(v*3+1))
    })
    .then((v) => {
        console.log(v);
        return new Promise((resolve) => {
            fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => resolve(v+1));
            return v+1;
        })
    })
    .then((v) => {
        console.log(v);
        return new Promise((resolve) => {
            fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => resolve());
        })
    });
} 

async function pushPromise() {
    for(let count = 0; count < 10; count++){
        await excutePromise(count);
    }
}

pushPromise();
