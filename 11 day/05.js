var mysql= require('mysql2');
var exp=require('express');
var app=exp();
app.listen(9005,()=>
	console.log("running on 9005")
);

var con=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'dac'
});

con.connect(function(err){
	if(!err)
	console.log("connected");
	else
	console.log("NOT  connected");
});

app.get('/emp',function(req,res){
	con.query("select * from emp",function(err,data){
		if(!err)
		{
			res.write("<table border=1>");
			data.forEach(function(v){
			
			res.write("<tr>");
			//v.forEach(function(v1){
				res.write("<td>"+v.EMPNO+"</td>");
				res.write("<td>"+v.ENAME+"</td>");
				res.write("<td>"+v.SAL+"</td>");
			//});
			res.write("</tr>");
			});
			res.write("</table>");
			res.end();

		}
	});
});