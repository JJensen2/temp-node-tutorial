const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log('error 1');
        return;
    }

    const first = result;
    readFile('./content/second.txt','utf8', (err,result)=>{
        if(err){
            console.log('error 2');
            return;
    }
    const second = result;
    writeFile('./content/result-async.txt',`Here is the result v2 : ${first}, ${second}`,(err, result)=>{
        if(err){
            console.log('error 3');
            return;
        }
        console.log('done with task');
    })
    });
});

console.log('starting next task');