'use strict'
const fs = require('fs');
const fileName = process.argv[2];
const spawn = require('child_process').spawn;


if(!fileName) {
	 throw Error("A file to watch must be specified!");
}

fs.watch( fileName,function() {
	let ls = spawn('get-childitem',[fileName]);
	ls.stdout.pipe(process.stdout);
	console.log("File " + fileName + " just changed!!!");
});

console.log("Now watching " + fileName + " for changes...");