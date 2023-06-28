var exp=require('express');
var mysql=require('mysql2');
var bp=require('body-parser');
var app=exp();

app.use(exp.static('scripts'));
app.use(bp.urlencoded({extended: false }));
//app.use(bp.json());

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dac'
});

con.connect(function(err){
    if(!err)
    console.log("Connected");
    else
    console.log("NOT Connected");
});

app.listen(9000,function(){
    console.log("running on 9000");
});

app.get('/form',function(req,res){
    res.sendFile(__dirname+'/j5.html');
});

app.post('/formCheck',function(req,res){
    var dno = req.body.deptno;
    console.log(dno);
    
    con.query('select * from emp where deptno='+dno,function(err,data){
        if(!err)
        {
            res.send(JSON.stringify(data));
        }
        
    });
})