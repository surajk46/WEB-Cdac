var exp=require('express');
var app=exp();
var mysql=require('mysql2');
app.use(exp.static('scripts'))
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dac'
});

con.connect(function(err){
    if(!err)
        console.log("database connected");
    else
        console.log("database not connected");
});


app.listen(9001,function(){
    console.log('server on 9001');
});


app.get('/form',function(req,res){
    res.sendFile(__dirname+"/j3.html");
})
app.get('/formcheck',function(req,res){
   var no=req.query.no;
   console.log(no)
   con.query('select * from emp where deptno='+no,function(err,data){
        if(!err)
        {
            var a="<table border=1>";
            data.forEach(v=>{
                a+="<tr>";
                a+="<td>"+v.ENAME+"</td>";
                a+="<td>"+v.JOB+"</td>";
                a+="<td>"+v.SAL+"</td>";
                a+="<td>"+v.DEPTNO+"</td>";
                a+="</tr>";
            });
            a+="</table>";
            res.send(a);

        }
   })
});