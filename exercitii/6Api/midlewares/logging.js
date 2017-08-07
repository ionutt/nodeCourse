var fs = require('fs');

module.exports = function( ) {
    return function(req, res, next) {
        var text = new Date() + ': ' + req.path + '\n';
        fs.appendFile('data/log.log', text, 'utf-8', function () {
            next( );
        });
    };
};