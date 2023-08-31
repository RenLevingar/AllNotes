const {readFile, writeFile, readFileSync, writeFileSync} = require('fs');
const path = require('path');
console.log('Winter is here');

// read and writefile is asynchronous allowing for the program to continue execution until the other process has completed

// read and writefile is synchronous and will stop  to execute the process before executing the rest of the code
readFileSync(path.join(__dirname, 'content/first.txt'),'utf8',(err,result)=>{
    if (err){console.log(err);return}
    const first = result;
    readFileSync(path.join(__dirname, 'content/first.txt'),'utf8',(err,result)=>{
        if (err){console.log(err);return}
        const second = result;
        writeFileSync(path.join(__dirname, 'content/result-async.txt'),`here is the result:${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
});
console.log('starting next task');