// console.log("Hello World !!!");

// Data Types =>

// Java => Primitive => int , float , double , boolean
// Non Primitive => Arrays , Stacks


// Javascript => Number(int , float , double) , Boolean , String(  "" , '' ) , undefined , Null , Object

 // Datatype name = value;
 // int a = 10;


 // ES6 => Ecma Script 6
// Two keyword let and const

// Dynamic casting
let a = 10;  // you have declared a variable with name and initialized it with value 10;
// let keyword => block scoped

// console.log(a);

if(true){
   let a = 20;
//    console.log(a);
}

// console.log(a);


// const => constant => block scoped and constant

// declare and assign
const pi = 3.14;
// console.log(pi);


let c = true;
let d = 3.14;
let e = 'Hey i am a string';
let f = undefined;
let g;
// console.log(g);

// Non Primitive

// Arrays=>
// int[] a = new int[5];

let values = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
// console.log(values);

// add some data in values array
values.push("Captain america !!");
// console.log(values);
// function , object , string , int , boolean 

// console.log(values.pop());

// console.log(values);

//push => add at the end 
//pop => delete from the end

// shift => delete a element from the starting 
// unshift => add a element in the starting of the array
// console.log(values.shift());
// console.log(values);

// Objects => key values pair
// keys => unique

let obj = {
    "Full Name":"Steve Rogers",
    place:"Queens",
    movies:["captain america" , "winter soldier" , {
        bestie : "bucky",
        nickname:"wintersoldier",
        partner : "falcon",
        weaknes : ["brainwash"]
    }]
}


console.log(obj.movies[2].weaknes[0].substring(1,5))


// get a value of a key in object
// dot notation => literal check
// console.log(obj.name);
// console.log(obj.movies);


let key = "place";
// console.log(obj.key); //=> it will check if there is a key named "key"

// square brackets notation
obj["place"];
obj["Full Name"];

obj.skills = ["martial arts" , "taekwondo"];
obj.place = "New york";
// console.log(obj);


