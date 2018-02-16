var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/color');
//var cors = require('cors');
var config = require('../src/config');
var port = config.apiPort;

var app = express();

//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(port, function () {
  console.log('COLOR MGT Backend is running in port ' + port + '!');
});