var http = require('http');
var fs = require('fs');
var my_module = require ('./my_module');

var server = http.createServer(function (req, res) {
    my_module.readFile(function ( data ) {
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(3001);