var express = require('express');
var port = 3000;

var app = express();
app.get('/', function (req, res, next) {
    if ( 1 == 2 ) {
        res.send('Hello World!');
    } else {
        next();
    }
}, function (req, res) {
    res.send('Hello World2!');
});


app.listen(port, function () {
    console.log('Express started on port ' + port);
});