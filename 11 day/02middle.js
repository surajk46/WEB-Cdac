var exp=require("express");
var app=exp();
var fs=require('fs');
app.listen(9002,function(){
    console.log("running on 9002");
});

app.use(function(req,res,next){
   // res.send("<h2>"+new Date()+"</h2>");
    fs.readFile('log.txt',function(err,data){
        if(!err)
        {
            var d=new Date();
            fs.appendFile('log.txt',"\n"+d,function(err){
                console.log("success");
            });
        }
    });
    next();
});


app.get("*",function(req,res){
    res.send("nothing to show");
});
