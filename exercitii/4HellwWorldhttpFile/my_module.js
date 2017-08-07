var fs = require('fs');

module.exports =  {
    sayHello: function ( callback ) {
        var encoding = 'utf-8';
        fs.readFile('./views/index.html', encoding, function ( err, data) {
            callback( data );
        } );
    }
};