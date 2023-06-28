var exp=require('express')
var mysql=require('mysql2')
var app=exp();
app.listen(9000,function(){
    console.log("on 9000")
});
app.use(exp.static('images'))
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dac'
});

con.connect(function(err){
    if(!err)
        console.log("db connected")
    else
        console.log("db not connected")
})

app.get("/emp",function(req,res){
    con.query('select * from emp',function(err,data){
        if(!err)
        {
            var a="<table>";
            for(i=0;i<data.length;i++)
            {
              
                a+="<tr><td>"+data[i].ENAME+"</td>"
                a+="<td>"+data[i].EMPNO+"</td>"
                a+="<td>"+data[i].COMM+"</td>"
                a+="<td>"+data[i].SAL+"</td></tr>"
                
            }
            a+="</table>"
            res.write(a);
            res.end();
        }
    })
})