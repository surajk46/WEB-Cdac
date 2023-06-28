var exp = require('express');
var mysql = require('mysql2');
var app = exp();

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"test" 
})

con.connect(function(err){
 if(!err)
     console.log("db conencted");
 else
     console.log("db connection failed")    
})


app.get('/deptform',function(req,res){
    res.sendFile(__dirname+"/deptform.html");
})

app.get('/getemps',function(req,res){
    var dno = req.query.deptno;
    con.query('select * from emp10 where deptno = '+dno,function(err,result){
        if(!err)
        {
            str="<table border=1>";
            result.forEach(function(v){
                str+="<tr>";
                str+="<td>"+v.EMPNO+"</td>";
                str+="<td>"+v.ENAME+"</td>";
                str+="</tr>";
            })
            str+="</table>";
            res.send(str);
        }
    })
})


app.listen(9000, function(){
    console.log("exp app - 9000");
})