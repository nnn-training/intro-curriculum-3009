'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
function main() {
    let primiseChain = Promise.resolve();
    for (let count = 0; count < 30; count++) {
        primiseChain = primiseChain
            .then(() => {
                return appendFilePromise(fileName, 'おはようございます\n');
            })
            .then(() => {
                return appendFilePromise(fileName, 'こんにちは\n');
            })
            .then(() => {
                return appendFilePromise(fileName, 'こんばんは\n');
            });
    }
}
main();
