var exp=require('express');
var app=exp();
app.listen(9003,()=>
    console.log("running on 9003")
);
app.use(exp.static('images'));
app.use(exp.static('css'));[-]
app.get('/login',function(req,res){
    res.sendFile(__dirname+"/form2.html");
});
app.get('*',function(req,res){
    res.send("<h1>any one page</h1>")
})
