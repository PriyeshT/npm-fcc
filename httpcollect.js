var http = require('http');

var url = process.argv[2];
var body = "";

http.get(url, function(response){
   response.setEncoding('utf8');
   
   response.on('data', function(data){
       body += data;
   });
   
   response.on('end', function(){
       console.log(body.length);
      console.log(body); 
   });
});