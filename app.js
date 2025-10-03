// fs.readFileSync

// 'use strict';
// const fs = require('node:fs');

// function cat(fileName) {
//   const content = fs.readFileSync(fileName, 'utf8');
//   console.log(content);
// }

// promise チェーン

// 'use strict';
// const fs = require('node:fs');

// function cat(fileName) {
//   const promise = new Promise((resolve, reject) => {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//       return resolve(data);
//     });
//   }).then((content) => {
//     console.log(content);
//   });
// }

// async/await

'use strict';
const fs = require('node:fs');

async function cat(fileName) {
  const content = await fs.promises.readFile(fileName, 'utf8');
  console.log(content);
}

cat(process.argv[2]);