//readFile Asynchronously using callbacks.
//For more info on callbacks - read [https://github.com/maxogden/art-of-node#callbacks](https://github.com/max]

//Callbacks are functions that are executed asynchronously, or at a later time.
//Callbacks are just functions that get executed at some later time. The key to understanding callbacks is to realize 
//that they are used when you don't know when some async operation will complete, but you do know where the 
//operation will complete — the last line of the async function! 

var fs = require("fs");
var lines = undefined;

function countLines(callback){
    fs.readFile(process.argv[2],'utf8',function doneReading(err, fileContents){
        if(err){
            console.log("There was error in reading the file.");
        }
        lines = fileContents.toString().split("\n").length - 1;
        callback();
    });
    
}

function logLines(){
    console.log(lines);
}

countLines(logLines);