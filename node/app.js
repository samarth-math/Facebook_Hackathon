var express = require('express');
var app = express();
//var path = require('path');
//var publicDir=path.join(__dirname,'public');
var routes = require('./routes.js');
/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});
*/

app.use('/',routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
