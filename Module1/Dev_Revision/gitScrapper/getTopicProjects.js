const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");


function getTopicProjects(topicName , topicLink){
    request(topicLink , function(err , res , data){
        processData(topicName , data);
    })
}

function processData(topicName , data){
    let myDocument = cheerio.load(data);
    let allProjectH1Tags = myDocument(".f3.color-text-secondary");
    let topicFolderPath = `./Topics/${topicName}`;
    let projectsFile = [];
    for(let i=0 ; i<10 ; i++){
        let projectH1Tag = allProjectH1Tags[i];
        let bothATags = myDocument(projectH1Tag).find("a");
        let projectATag = myDocument(bothATags[1]);
        let projectName = projectATag.text().split("\n")[1].trim();
        let projectLink = "https://www.github.com"+projectATag.attr("href");
        projectsFile.push({projectName , projectLink});
    }
    fs.writeFileSync(`${topicFolderPath}/projects.json` , JSON.stringify(projectsFile));
}



module.exports = getTopicProjects;