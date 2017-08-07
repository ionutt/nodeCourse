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
		fs.readFile('./data/dummy.json', function ( err, data) {
			var myData = JSON.parse(data),
				len = myData.length,
				ret = {
					success:false,
					msg: 'notfound'
				};
			
			for (var i = 0; i < len; i++) {
				if (id == myData[i].id){
					ret = {
						success:true,
						msg: 'foundddddd'
					};
					break;
				}
			}
			callback(ret.success, ret);
        });
	}
};