var h=require("http");
var server=h.createServer(function (req,res){
res.writeHead(200,{'content-type': 'text/html'});
res.write("<h1>hello</h1>");
res.end();
});

server.listen(9000,function(){console.log("running")})