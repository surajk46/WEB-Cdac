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
        console.log("database connected");
});


app.listen(9001,function(){
    console.log('server on 9001');
});


app.get('/form',function(req,res){
    res.sendFile(__dirname+"/jqueryId.html");
})

app.get('/formCheck',function(req,res){
    var uid=req.query.id;
    console.log(uid);
})

