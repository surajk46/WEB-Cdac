//require the module - custom/core
var h = require('http');

var server = h.createServer(function(req,res){
	//req processing, res generation
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1> Welcome to node server </h1>");
	res.write("<p> Creted web server using node JS </p>");
	res.end();
 });

server.listen(9000, function() {
	console.log("server started at 9000");
 });