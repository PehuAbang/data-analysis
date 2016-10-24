var express = require('express');
var app = express();
var fs = require("fs");
var exec = require('child_process').exec;
var path = require('path');

app.get('/getpdf', function (req, res) {

	var fullUrl = req.protocol + '://' + req.get('host');
	console.log(fullUrl);
	console.log('param:',req.query);
	
	var file = 	__dirname + '/report.pdf';
	var url = encodeURI('http://localhost:8080/pdf.html?city='+req.query.city);
	var command = 'wkhtmltopdf ' + url + ' '+ file;
	console.log(command);
	return ;
	var testscript = exec( command , function(err, stdout, stderr){
		console.log('err ' , err );
		console.log('stdout' , stdout);
		console.log('stderr' , stderr);

		res.setHeader('Content-disposition', 'attachment; filename=report.pdf');
		res.setHeader('Content-type', 'application/pdf');
		fs.readFile( file, '', function (err, data) {
			res.end( data );
		});
	});	

})

var server = app.use(express.static('./')).listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
