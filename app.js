'use strict';
const fs = require('node:fs').promises;

// function cat(fileName) {
//   const content = fs.readFileSync(fileName, 'utf8');
//   console.log(content);
// }

// function cat(fileName) {
//   const promise = new Promise((resolve, reject) => {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
//   promise.then((content) => {
//     console.log(content);
//   });
// }

// function cat(fileName) {
//   fs.readFile(fileName, 'utf8').then((content) => {
//     console.log(content);
//   });
// }

async function cat(fileName) {
  const content = await fs.readFile(fileName, 'utf8');
  console.log(content);
}

cat(process.argv[2]);