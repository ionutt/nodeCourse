var fs = require('fs');

module.exports =  {
    readFile: function ( callback ) {
        var encoding = 'utf-8';
        fs.readFile('./views/index.html', encoding, function ( err, data) {
            callback( data );
        } );
    }
};