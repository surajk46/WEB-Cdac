var exp=require('express');
var app=exp();
var mysql=require('mysql2');
app.use(exp.static('scripts'))
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'shoppingdb'
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
    res.sendFile(__dirname+"/j1.html");
})
app.get('/formCheck',function(req,res){
    var id=req.query.id;
    console.log(id);
    con.query("select * from users where u_id='"+id+"'",function(err,data){
        if(!err)
        {
            if(data.length==1)
            str="data found";
            else
            str="record not found";
            console.log(str);
            res.send(str);
        }
    });
});