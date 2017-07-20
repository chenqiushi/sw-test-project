var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/sf', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/s', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

// serve static resources
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
