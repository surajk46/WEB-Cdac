var exp=require("express")
var mysql=require('mysql2')

var app=exp()
app.listen(9000,function(){
    console.log("On 9000")
});
app.use(exp.static('scripts'))
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dac'
})
con.connect(function(err){
    if(!err)
        console.log("DB conncted")
    else
        console.log("DB not conncted")

})
app.get('/login',function(req,res){
    res.sendFile(__dirname+"/01p.html")
})
app.get("/emp",function(req,res){
    no=req.query.no;
    console.log(no)
    con.query("select * from emp where empno="+no,function(err,data){
       if(!err)
        res.send("<h1>Welcome "+data[0].ENAME+"</h1>")
    })
})