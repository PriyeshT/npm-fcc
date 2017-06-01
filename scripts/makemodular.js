var filteredFiles = require('./filter_module');

var dirPath = process.argv[2],
    ext = process.argv[3];
    
filteredFiles(dirPath, ext, function(err, list){
    if(err){
        console.log("Error reading the dir "+dirPath);
        return err;
    }
    
   list.forEach(function(fileName){
    console.log(fileName);    
   });
});

