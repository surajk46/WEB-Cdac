var exp=require('express');
var mysql=require('mysql2');
var bp=require('body-parser');
var app=exp();

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sakila'
});

con.connect(function(err){
    if(!err)
    console.log("Connected");
    else
    console.log("NOT Connected");
});

app.use(exp.static('scripts'));
app.use(bp.urlencoded({extended: false }));

app.get('/form',function(req,res){
    res.sendFile(__dirname+'/pj1.html');
});

app.post('/greet',function(req,res){
    var id=req.body.aid;
    console.log(id)
    con.query('select * from actor where actor_id='+id,function(err,data){
        if(!err)
        {
            res.send(JSON.stringify(data));
        }
    })
});

app.listen(9000,function(){
    console.log("running on 9000")
});

