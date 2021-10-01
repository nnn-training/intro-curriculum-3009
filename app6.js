'use strict';
const fs = require('fs');
const fileName = './test6.txt';

let count = 0;
function addFile() {
    if (count === 30){
        return;
    }
    fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {
        fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {
            fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {
                count++;
                addFile();
            });
        });
    });
}

addFile();