var h=require("http");

var server=h.createServer(function(req,res){
    res.console.log(__fileName);
    res.console.log("hello world");
    res.end();
});

server.listen(9000,function(){
	console.log("server staterd");
});