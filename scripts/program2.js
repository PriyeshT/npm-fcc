
process.argv = process.argv.splice(2,process.argv.length);

var sum = 0;
for(var i in process.argv){
    sum += +process.argv[i];
}

console.log(sum);