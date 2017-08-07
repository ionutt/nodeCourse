var express = require('express');
var port = 3001;
var logging = require('./midlewares/logging.js');
var postsModel = require('./models/posts.js');

var app = express( );

//server all files for FrontEnd ( from public directory)
app.use(express.static('public'));
//midleware logging
app.use(logging());
//routing
app.get('/api/posts/', function(req, res, next) {
    postsModel.getList(req, res, next);
});
app.delete('/api/posts/:id', function(req, res, next) {
    postsModel.deleteItem(req, res, next);
});


app.listen(port, function () {
    console.log('Express started on port ' + port);
});