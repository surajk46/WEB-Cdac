var h = require('http');

h.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'})
	if(req.url == '/home')
	     res.write("<h1> Home Page </h1>");
	else if(req.url == '/login')
	     res.write("<h1> Login Page </h1>");	
	res.end();

}).listen(9000,function(){ console.log("server - 9000")})
