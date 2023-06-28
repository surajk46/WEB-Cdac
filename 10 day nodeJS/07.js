var h=require("http");
var u=require('url');
var fs=require('fs');

var server=h.createServer(function(req,res){
  
    if(req.url=='/favicon.ico')
             return;
    fs.readFile('log.txt',function(err,data){
        if(!err)
        {
            r=parseInt(data);
            r++;
            fs.writeFile('log.txt',""+r,function(err1){
               if(!err1)
                {
                    console.log("Success");
                }
                res.writeHead(200,{'content-type':'text/html'});
	            res.write("<h1>Welcome"+r+"</h1>");	
	            res.end();
            });
        }
    });
    
    
});

server.listen(9007,function(){
    console.log("running on 9007")
})