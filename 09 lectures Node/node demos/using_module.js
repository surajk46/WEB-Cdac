//node app
//makes use of mymodule functionality

var mym = require('./mymodule.js')

console.log(mym.msg.concat(" Hello"));

console.log("Area : "+mym.calArea(4.5));

console.log(mym.person.fname);

console.log(mym.arr.reduce((add,v)=>add+v));

