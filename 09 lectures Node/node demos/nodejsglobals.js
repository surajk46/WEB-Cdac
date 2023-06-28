console.log("File name : "+__filename);
console.log("Current directory : "+__dirname);

setTimeout(function(){ console.log("after 2000 ms") } , 2000)

console.log("Process pid : "+process.pid);
console.log("Process current directory : "+process.cwd());


//REPL - Read Eval Print Loop