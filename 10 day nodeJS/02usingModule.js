var my=require("./02myModule.js");
var n=5;


var np=my.isPrime(n);
if(np==true)
	console.log("is Prime");
else
	console.log("is NOT Prime");

var v=my.isFact(n);
	console.log("fact of "+n+" = "+v);



if(my.isPerfect())
	console.log("is perfect No");
else
	console.log("is NOT Perfect No");