'use strict';
const fs = require('node:fs').promises;

function cat(fileName) {
    const content = fs.readFile(fileName, 'utf8',).then((content) => {console.log(content);
    });
}

cat(process.argv[2]);