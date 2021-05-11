const fs = require("fs");

console.log("start");


fs.readFile("./f1.txt" , getData);


function getData(error , data){
    console.log(data+"");
}


console.log("end");
