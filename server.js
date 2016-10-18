var connect = require('connect');
var serveStatic = require('serve-static');

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.use(express.static('dist')).listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

/*
connect().use(serveStatic(__dirname + '/dist')).listen(8080, function(){
    console.log('Server running on 8080...');
});
*/