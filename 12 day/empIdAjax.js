var exp=require("express");
var mysql=require("mysql2");
var app=exp();

var con=mysql.createConnection({
    host:"localhost",
    user :'root',
    password:'root',
    database:'dac'
})

con.connect(function(err){
    if(!err)
        console.log("db connected");
    else
        console.log("db NOT connected");
});

app.listen(9000,function(){
    console.log("running on 9000");
});

app.get('/form',function(req,res){
    res.sendFile(__dirname+"/empIdForm.html");
});

app.get('/formCheck',function(req,res){
    var uid=req.query.empId;
    
console.log(uid);
    con.query('select * from emp where empno='+uid,function(err,data){
        if(!err)
        {
            str='<h1>';
            str+="welcome"+data[0].ENAME;
            str+="</h1>";
            console.log(str);
            res.send(str);
        }
    });
});