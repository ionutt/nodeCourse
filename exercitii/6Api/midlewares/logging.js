var fs = require('fs');

module.exports = function( ) {
    return function(req, res, next) {
        var text = 'ionut';
        console.log('1231');
        fs.writeFile('data/log.log', text, 'utf-8', function () {
            next( );
        });
    };
};