var express = require('express');
var port = 3000;
var logging = require('./midlewares/logging.js');
var postsModel = require('./models/posts.js');

var app = express( );

app.use(express.static('public'));
app.use(logging());
app.get('/api/posts/', function(req, res, next) {
    postsModel.getList(req, res, next);
});


app.listen(port, function () {
    console.log('Express started on port ' + port);
});