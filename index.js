// first commit
// var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello world\n');
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.01:3000/');

// second commit
// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World!');
//     // res.json({greeting: 'hi world'});
// });

// var server = app.listen(3000, function () {
//     console.log('Server running at http://127.0.0.1:3000/');
// });

// third commit
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// var cats = require('./cats.js')(app); // route definitions being put into this file

// var server = app.listen(3000, function () {
//     console.log('Server running at http://127.0.0.1:3000/');
// });

// adding mongo to the App
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var catRoutes = require('./cat_routes.js')(app);

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});
