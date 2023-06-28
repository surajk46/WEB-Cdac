var h = require('http');
var u = require('url');

h.createServer(function(req,res){
	var url_p = u.parse(req.url, true);
        //req url is encoded - so it needs to be decoded and parsed
	//console.log(url_p);
	//console.log(url_p.query.name)
	//console.log(url_p.query.color)
	var nm = url_p.query.name;
	var cl = url_p.query.color;
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1 style='color:"+cl+"'> Welcome "+nm+"</h1>");
	res.end();

}).listen(9000,function(){ console.log("server - 9000")})