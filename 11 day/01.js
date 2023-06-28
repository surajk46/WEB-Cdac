var exp=require("express");
var app=exp();
app.listen(9000,function(){
	console.log("running on 9001");
});

app.get('/home',function(req,res){
	res.send("<h1>welcome</h1>");
});

app.get('*',function(req,res){
	res.send("<h2>Home</h2>");
});