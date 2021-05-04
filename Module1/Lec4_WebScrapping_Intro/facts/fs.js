// In DEV_PP11 folder
// npm init -y
// npm install cheerio

const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html" , "utf8");
// console.log(htmlKaData); // we have stringified html file !!!

// html file is loaded in cheerio
let myDocument = cheerio.load(htmlKaData);

// document.querySelector("h1");

// console.log(myDocument);
let h1KaData = myDocument("h1").text();
// console.log(h1Element); element => cheerio => object form me data
// console.log(h1KaData);

// let secondPTag = myDocument("p")["1"];

// console.log(secondPTag.text());

// console.log(myDocument(secondPTag).text());

// Selectors
// console.log( myDocument("ul p").text() ); // it will give all the p tags inside ul

// a tag
// console.log(myDocument("a").text());
// you will get all a tags inside li
// console.log(myDocument("ul li a").text());

// only direct child !!
// console.log(myDocument("ul>a").text());


// classes and ids
// dot
// console.log( myDocument(".inside").text() );
console.log( myDocument(".inside.main").text()  );


// ids => 
// #
console.log( myDocument("#main-heading").text() );
