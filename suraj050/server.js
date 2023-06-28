var exp=require('express');
var bp=require('body-parser');
var app=exp();
app.use(exp.static('scripts'))
app.use(bp.urlencoded({extended: false }));

app.listen(9000,function(){
    console.log("running on 9000");
});

app.get('/getform',function(req,res){
    res.sendFile(__dirname+'/form.html')
})

app.post('/getDataTable',function(req,res){
    var name = req.body.NAME;
    var bdate = req.body.BDATE;
    var email = req.body.EMAIL;
    var quli = req.body.QULI;
    a="<table border=1>";
    a+="<tr><td> Name </td><td>"+name+"</td></tr>";
    a+="<tr><td> BDATE </td><td>"+Date(bdate)+"</td></tr>";
    a+="<tr><td> email </td><td>"+email+"</td></tr>";
    a+="<tr><td> QUALIFICATION </td><td>"+quli+"</td></tr>";
    a+="</table>"
    res.send(a);

})