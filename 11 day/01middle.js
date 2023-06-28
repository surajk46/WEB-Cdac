var mysql= require('mysql2');
var exp=require('express');
var app=exp();
app.listen(9001,()=>
	console.log("running on 9001")
);
app.use(exp.static('images'));
app.get('/login',function(req,res){
	res.sendFile(__dirname+"/form1.html");
});
app.get('*',function(req,res){
	res.send("<h1>any page</h1>");
});