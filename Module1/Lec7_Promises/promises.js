const fs = require("fs");

// sync function
// async function \
// promisifed function

let pendingPromise = fs.promises.readFile("./f1.txt" , "utf8");

console.log(pendingPromise);

// promise ka object uske pass do function then() and catch();


// then function attaches a success callback to the pendingPromise
pendingPromise.then( function(data){
    console.log("Inside scb");
    console.log(pendingPromise);
    console.log(data+"");
} );


// catch function attaches a failure callback to the pendingPromise
pendingPromise.catch( function(error){
    console.log("Inside fcb");
    console.log(error);
});

