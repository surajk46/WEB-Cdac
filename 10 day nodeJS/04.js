var h=require("http");
var u=require("url");

var server=h.createServer(function(req,res){
	var url_p=u.parse(req.url,true);
	var nm=url_p.query.name;
	var clr=url_p.query.clr;
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1 style='color:"+clr+"'>Welcome "+nm+" </h1>");	
	res.end();
});

server.listen(9001,function(){
console.log("running on 9001")
});