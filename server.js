var express = require('express');

var app = express();
var port = 3000;


app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
//express static files to be served


var server = app.listen(port);
console.log('Server is running on port: ' + port);
