const FS = require('fs');
const PATH = require('path');

let inputFromTxt = FS.createReadStream(PATH.join(__dirname, 'text.txt'), 'utf8');
let res = '';

inputFromTxt.on('data', data => console.log(data));