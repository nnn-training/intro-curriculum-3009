'use strict';
const fs = require('fs');
const filename = './test_promise.txt';

function append_file_promise(filename, str){
	return new Promise((resolve) => {
		fs.appendFile(filename, str, 'utf8', () => resolve());
	});
}

async function main() {
	for(let i = 0; i<100; i++){
		await append_file_promise(filename, 'good mornig\n');
		await append_file_promise(filename, 'hello\n');
		await append_file_promise(filename, 'good evening\n');
	}
}

main();
