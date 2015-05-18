/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
 ***/
const
    builder = require('xmlbuilder'),
    fs = require('fs'),
    readline = require('readline');
var rd;
rd = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
    if(line.trim()[0] !== '#') {
        //console.log(line.split('|'));
        var splitLine = line.split('|');
        console.log(splitLine[0]);
        console.log(splitLine[1]);
        console.log(splitLine[2]);
        console.log(splitLine[3]);
    }
});

