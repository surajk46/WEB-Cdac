var exp = require('express');

var app = exp();

var mysql = require('mysql2');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"statecitydb" 
})

con.connect(function(err){
 if(!err)
     console.log("db conencted");
 else
     console.log("db connection failed")    
})

app.use(exp.static("scripts"))
app.listen(9000, function(){
console.log("server started")
})

app.get('/form',function(req,resp){
resp.sendFile(__dirname+"/statecity_jquery.html")
})

app.get('/getcities',function(req,resp){

   var sid= req.query.stateId
   con.query("select * from city where stateid="+sid,function(err,result){

     if(!err)
    { str="";
        result.forEach(function(v){
            str+="<option value='"+v.cityid+"'>"+v.name+"</option>"
            
        })
        resp.send(str);

    }
   })   
})


