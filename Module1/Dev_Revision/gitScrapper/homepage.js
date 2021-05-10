const cheerio = require("cheerio");
const request = require("request");

// high order function + async function !!!
request("https://github.com/topics" , function(err , res , data){
    // console.log(data);
    processData(data);
})


function processData(html){
    console.log(html);
}