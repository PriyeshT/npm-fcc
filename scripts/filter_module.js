var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, ext,cb) {
    
    var filteredFiles = [];
    
    fs.readdir(dirPath, function(err, list){
       if(err){
           return cb(err);
       } 
       
       list.forEach(function(fileName){
          if(path.extname(fileName) === "." + ext) {
              filteredFiles.push(fileName);
          }
       });
       
       cb(null, filteredFiles);
    });
}