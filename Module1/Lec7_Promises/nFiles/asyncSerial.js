let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];


// Chaining with the help of loop !!!!

let f1KaPendingPromise = fs.promises.readFile(files[0]);

for(let i=1 ; i<files.length ; i++){

    f1KaPendingPromise = f1KaPendingPromise.then( function(data){
        console.log(data+"");
        let nextFilePromise = fs.promises.readFile(files[i]);
        return nextFilePromise;
    })

}

f1KaPendingPromise.then(function(data){
    console.log(data+"");
})