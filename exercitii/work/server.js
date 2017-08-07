var http = require('http');

var server = http.createServer(
    function (req, res) {
        res.writeHead(200);
        res.end('Hello');
    });

    server.listen(3001);

    
var server2 = http.createServer(
    function (req, res) {
        res.writeHead(200);
        res.end('Hello fromserver 2');
    });

    server2.listen(3002);