'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appPromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf-8', () => resolve());
    });
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await appPromise(fileName, 'おはようございます\n');
        await appPromise(fileName, 'こんにちは\n');
        await appPromise(fileName, 'こんばんは\n');
    }
}

main();
