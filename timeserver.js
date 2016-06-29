//timeserver
var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
    var date = strftime('%F %R');
    socket.end(date + "\n");
});

server.listen(process.argv[2]);