var express = require('express');
var app = express();
var fs = require("fs");
var exec = require('child_process').exec;



app.get('/listUsers', function (req, res) {

	
	var testscript = exec('ls -lh /usr');

	testscript.stdout.on('data', function(data){
	    console.log(data); 
	    console.log('testscript.stdout');

	   fs.readFile( __dirname + "/charts.pdf", '', function (err, data) {
	      console.log( data );
	      res.end( data );
	   });
	});

	testscript.stderr.on('data', function(data){
		console.log(data);
		console.log('testscript.stderr'); 
	});

})

var server = app.use(express.static('dist')).listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
