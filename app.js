var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.static(__dirname + '/public'));

 app.get('/', function(req, res) {
        res.sendfile('./public/index.html'); 
    });
	

app.use(require('./routes/routes'));

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
