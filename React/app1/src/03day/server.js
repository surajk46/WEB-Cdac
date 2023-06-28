var server=require('express')
var mysql=require('mysql2');
var app=server();

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dac'
});

app.get('/getemp',function(req,res){
    con.query('select * from emp',function(err,data){
        if(!err)
        {
            res.send(JSON.stringify(data))
        }
    })
})

app.listen(9000,function(){
    console.log('running on 9000');
})