var h=require("http");
var u=require("url");
var fs=require("fs");
var server=h.createServer(function(req,res){
var url_p=u.parse(req.url,true);
var path=url_p.pathname;
var filen=path.substring(1);
fs.readFile(filen,function(err,data){
	if(!err)
	{
		res.writeHead(200,{'content-type':'text/html'});
		res.write(data.toString());
		res.end();
	}
});
});


server.listen(9002,function(){
	console.log("running on 9002");
});