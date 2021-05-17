// let is block scoped
// const is block scoped

// var => function scope


// var a = 20;

// console.log(a);

// if(true){
//     var a = 50;
//     console.log(a);
// }

// function callMe(){
//     console.log(a);
//     var a = 100;
//     console.log("Inside call me");
//     console.log(a);
// }

// callMe();

// console.log(a);

let a = 20;

console.log(a);

if(true){
    let a = 50;
    console.log(a);
}

function callMe(){
    
    console.log("Inside call me");
    console.log(a);
    let a = 100;
    console.log(a);
}

callMe();

console.log(a);

