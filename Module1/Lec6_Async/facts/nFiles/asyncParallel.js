let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];
const fs = require("fs");
// async code
// simultaneous process
console.log("start");

for(let i=0 ; i<files.length ; i++){
    fs.readFile(files[i] , function(err , data){
        console.log(data+"");
    })
}

console.log("end");