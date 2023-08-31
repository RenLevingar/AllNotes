// I want you to use the FS module and print out the 
const fs = require('fs');
const path = require('path');
// fs.writeFileSync(path.join(__dirname, '/name.txt'), "This is new test file for today",function(err){if(err){console.log(err);return;}});

fs.appendFile(path.join(__dirname,'name.txt'), "My name is Ren", function(err){if(err){console.log(err);return;}});

const abcd = path.join(__dirname,'name.txt');
fs.unlink(abcd, (err) => {if (err) {console.log(err);}});

fs.mkdir(path.join(__dirname, '/Levingar'), function(err){if(err){console.log(err);return;}});