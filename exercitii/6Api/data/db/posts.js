var fs = require('fs');

module.exports = {
    list: function ( callback ) {
        fs.readFile('./data/dummy.json', function ( err, data) {
            callback( err, JSON.parse(data) );
        });
    },
	update: function (id, callback) {
		
	},
	insert: function (id, title, post, callback) {
		
	},
	remove: function (id, callback) {
		
	}
};