var fs = require('fs'),
    db = require('../data/db/posts.js');

module.exports = {
    getList: function(req, res, next ) {
        db.list( function (err, data) {
            res.json({
                success: true,
                data: {
                    list: data
                }
            });
            next();
        });
    }
};