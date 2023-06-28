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
    database:'countryschema'
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

app.get('/getform',function(req,res){
    res.sendFile(__dirname+'/q2.html');
});

app.get('/getcountries',function(req,res){
    con.query('select * from country',function(err,data){
        if(!err)
        {
            res.send(JSON.stringify(data));
        }
    });
})