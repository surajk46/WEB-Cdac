var exp=require('express');
var app=exp();
app.listen(9001,()=>
    console.log("running on 9001")
);

app.use(function(req,res,next){
    console.log("in gernal middle");
    next();
});

app.get('/login',function(req,res){
    console.log("in the /login");
    res.sendFile(__dirname+"/form1.html")
});

app.get('*',function(req,res){
    console.log("in the * get");
    res.send("<h1>* get </h1>");
});