var express = require('express');
var fs = require('fs')1

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync("$HOME/bitstarter/index.html");
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
