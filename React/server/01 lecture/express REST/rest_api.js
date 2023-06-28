var exp=require('express')
var mysql=require('mysql2')
var cors=require('cors')
var app=exp();
app.use(cors())
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dac"
});

con.connect(function(err){
    if(!err)
        console.log("Connected")
    else
        console.log("Not Connected")
});

app.get('/empid',function(req,res){
        con.query("select * from emp", function(err, result){
        
            if(!err)
            {
            //     res.write("<table 1>");
            //     result.forEach(function(v){

            //         res.write("<tr>");
            //         res.write("<td>"+v.eid+"<td>");
            //         res.write("<td>"+v.ename+"<td>");
            //         res.write("<td>"+v.job+"<td>");

            //         res.write("</tr>")
                    
            // })
            //     res.write("</table>");
                res.send(JSON.stringify(result));

            }
        })
})

app.listen(9000, function(){
    console.log("Express is connected: 9000")
})

