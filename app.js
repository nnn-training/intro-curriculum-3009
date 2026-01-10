'use strict';
const fs = require('node:fs');

function cat(fileName) {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            return resolve(data);
        });
    });
    promise.then((result) => {
        console.log(result);
    });
};

cat(process.argv[2]);