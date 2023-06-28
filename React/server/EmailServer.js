var exp=require('express')
var mysql=require('mysql2')
var bp=require('body-parser')
var cors=require('cors')

var app=exp();
app.use(bp.json());
app.use(cors());
app.use(bp.urlencoded({extended: false }))


var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dac'
});

con.connect(function(err){
    if(!err)
        console.log("DB connected")
    else
        console.log("errr DB")
})


app.get('/getemp',function(req,res){
    con.query('select * from emp',function(err,data){
        if(!err)
            res.send(JSON.stringify(data));
    })
})

app.post('/email',function(req,res){
    var Name=req.body.ENAME;
    var no=req.body.EMPNO;
    con.query('update emp set ename="'+Name+'" where empno='+no,function(err,data){
        if(!err)
        res.send("insertion success")
        else
        res.send("insertion Unsuccess")
    })
})

app.listen(9000,function(){
    console.log("running on 9000")
})