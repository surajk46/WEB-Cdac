var exp=require('express');
var app=exp();
app.listen(9002,function(){
	console.log("on 9002");
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+'/form1.html');
});

app.get('/loginCheck',function(req,res){
	if(req.query.uid=="object" && req.query.pwd=="123")
		res.send("<h1>Succesful<h1>");
	else
		res.send("<h1>Unsuccessful</h1>");
});
app.get('/post',function(req,res){
	if(req.query.uid=="object" && req.query.pwd=="123")
		res.send("<h1>Succesful<h1>");
	else
		res.write("<h1>Unsuccessful</h1>");
});
app.get('*',function(req,res){
	res.send("<h1>any page</h1>");
});