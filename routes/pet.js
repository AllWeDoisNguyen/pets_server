var r = require('request').defaults({ // using r to simulate the request
    json: true
});

var async = require('async');

module.exports = function(app) {

    app.get('/pets', function (req, res) {

        // r({uri: 'http://localhost:3001/dog'}, function(error, response, body) {
        //     if(!error && response.statusCode === 200) {
        //         res.json(body);
        //     } else {

        //         res.send(response.statusCode);
        //     }
        // });
        // removing the dog server request to add in async

        async.parallel({
            cat: function(callback) {
                r({uri: 'http://localhost:3000/cat'}, function(error, response, body) {
                    if (error) {
                        callback({service: 'cat', error: error});
                        return;
                    };
                    if (!error && response.statusCode === 200) {
                        callback(null, body.data);
                    } else {
                        callback(response.statusCode);
                    }
                });
            },
            dog: function(callback) {
                r({uri: 'http://localhost:3001/dog'}, function(error, response, body) {
                    if (error) {
                        callback({service: 'dog', error: error});
                        return;
                    };
                    if (!error && response.statusCode === 200) {
                        callback(null, body.data);
                    } else {
                        callback(response.statusCode);
                    }
                });
            }
        },
        function(error, results) {
            res.json({
                error: error,
                results: results
            });
        });

    });
};