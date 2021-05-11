// multiple files
// async code
//  F1kaData => F2KaData => F3KaData

const fs = require("fs");


console.log("start");


fs.readFile("./f1.txt" , function(err , data){
    console.log(data+"");
    fs.readFile("./f2.txt" , function(err , data){
        console.log(data+"");
        fs.readFile("./f3.txt" , function(err , data){
            console.log(data+"");
        })
    })
})






console.log("end");