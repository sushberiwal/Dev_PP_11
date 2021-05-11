const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
const getTopicProjects = require("./getTopicProjects");


// high order function + async function !!!
request("https://github.com/topics" , function(err , res , data){
    // console.log(data);
    processData(data);
})

// let githubTopics = [];

function processData(html){
    let myDocument = cheerio.load(html);
    let allTopicsDiv = myDocument(".topic-box");

    // console.log(allTopicsDiv);
    for(let i=0 ; i<allTopicsDiv.length ; i++){
        let topicATag = myDocument(allTopicsDiv[i]).find("a");
        let topicLink = "https://www.github.com"+topicATag.attr("href");
        let topicName = topicATag.find(".f3").text().split("\n")[1].trim();
        let topicFolderPath = `./Topics/${topicName}`;
        fs.mkdirSync(topicFolderPath);
        getTopicProjects(topicName , topicLink);
    }
    // console.log(githubTopics);
}

