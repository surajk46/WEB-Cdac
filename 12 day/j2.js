var exp=require("express");
var mysql=require("mysql2");
var app=exp();

app.use(exp.static('scripts'))
app.listen(9000,function(){
    console.log("running on 9000");
});

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'statecitydb'
});
con.connect(function(err){
    if(!err)
    console.log("connected");
    else
    console.log("NOT connected");
});


app.get('/show',function(req,res){
    res.sendFile(__dirname+"/j2.html");
});

app.get('/showcity',function(req,res){
    var state=req.query.state;
    var a="";
    console.log(state)
    con.query('select * from city where stateid='+state,function(err,data){
        if(!err)
        {
            a+="<select>";
            data.map(function(v){
                a+="<option>"+v.name+"</option>";
            });
            a+="</select>";
            res.send(a);
            console.log(a);
        }
    });
 
    
});