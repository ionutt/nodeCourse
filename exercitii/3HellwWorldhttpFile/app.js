var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var encoding = 'utf-8';
    fs.readFile('views/index.html', encoding, function ( err, data) {
        res.writeHead(200);
        res.end(data);
    } );
});

server.listen(3001);