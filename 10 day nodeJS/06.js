var h=require("http");
var fs=require("fs");
var r=1;
s="";
var server=h.createServer(function(req,res){
    if(req.url=='/favicon.ico')
    return;
    fs.readFile('log.txt',function(err,data){
        if(!err)
        {
            //r=parseInt(data);
            s+=r++ + "  :  "+new Date+"\n";
            fs.writeFile('log.txt',s,function(){});
            res.writeHead(200,{'content-type':'text/html'});
            res.write(`<h1>hello ${r} </h1>`);
            res.end();
        }
    });
});
server.listen(9006,function(){console.log("running on 9006")});