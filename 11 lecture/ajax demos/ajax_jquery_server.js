var exp = require('express');
var mysql = require('mysql2');

var app = exp();
app.use(exp.static('scripts'))

var con = mysql.createConnection({
       host:"localhost",
       user:"root",
       password:"root",
       database:"test" 
   })

con.connect(function(err){
    if(!err)
        console.log("db conencted");
    else
        console.log("db connection failed")    
})


app.listen(9000,function(){
    console.log("ajax started : 9000");
})

app.get('/empform',function(req,res){
    res.sendFile(__dirname+"/empform_jquery.html")
})

app.get('/getname',function(req,res){
    //retrieve empid
    var eid = req.query.empid;
    //fire sql query
    console.log(eid);
    
    con.query('select * from emp10 where empno = '+eid, function(err,result){
        if(!err)
        {
           str="<h1>";
           console.log("in if "+result.length)
           /*result.forEach(function(v){
                str+="Welcome "+v.ENAME
           })*/
           str+="Welcome "+result[0].ENAME
           str+="</h1>";
           console.log(str);
           res.send(str);
        }    
    })
    //get the result, use it in HTML
    
    //send the response
   
   

})

