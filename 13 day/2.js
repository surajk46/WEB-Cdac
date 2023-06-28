var exp=require('express');
var mysql=require('mysql2');
var bp=require('body-parser');
var app=exp();

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dac'
})
app.use(exp.static('scripts'));
app.use(bp.urlencoded({extended: false }));
app.listen(9000,function(){
    console.log("running on 9000")
});

con.connect(function(err){
    if(!err)
    console.log("Connected");
    else
    console.log("NOT Connected");
});

app.get('/form',function(req,res){
    res.sendFile(__dirname+'/2.html');
});
app.post('/greet',function(req,res){
    var dno = req.body.eid;
    console.log(dno);
    
    con.query('select * from emp where empno='+dno,function(err,data){
        if(!err)
        {
            console.log(data);
            res.send(JSON.stringify(data));
        }
        
    });
})