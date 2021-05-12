const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
// let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

let leaderboard = [] ;
let countOfRequestSent=0 ;


function getMatchDetails(matchLink){
    console.log("Sending Request " , countOfRequestSent);
    countOfRequestSent++;

// Async call
    request(matchLink , function(error , response , data){
        countOfRequestSent--;
        processData(data);
        console.log("callback " , countOfRequestSent);
        if(countOfRequestSent == 0){
            console.table(leaderboard);
        }
    })
}


function processData(html){
    let myDocument = cheerio.load(html);
    let bothInnings = myDocument(".card.content-block.match-scorecard-table .Collapsible");
    for(let i=0 ; i<bothInnings.length ; i++){
        let oneInning = myDocument(bothInnings[i]);
        // <div class="Collapsible"></div>
        let teamName = oneInning.find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        // console.log(teamName);
        let allTrs = oneInning.find(".table.batsman tbody tr");
        for(let j=0 ; j<allTrs.length-1 ; j++){
            let allTds = myDocument(allTrs[j]).find("td");
            if(allTds.length > 1){
                // batsmanName allTds[0]
                let batsmanName = myDocument(allTds[0]).text().trim();
                // runs allTds[2]
                let runs = myDocument(allTds[2]).text().trim();
                // balls
                let balls = myDocument(allTds[3]).text().trim();
                // fours allTds[5]
                let fours = myDocument(allTds[5]).text().trim();
                // sixes allTds[6]
                let sixes = myDocument(allTds[6]).text().trim();
                // sr allTds[7]
                let strikeRate = myDocument(allTds[7]).text().trim();
                // console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} StrikeRate = ${strikeRate}`);
                // processDetails(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
                processLeaderBoard(teamName , batsmanName , runs , balls , fours , sixes);
            }
        }
    }
    // console.log("############################################");
}


function processLeaderBoard(teamName , batsmanName , runs , balls , fours , sixes ){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    for(let i=0;i<leaderboard.length ; i++){
        let batsmanObject = leaderboard[i];
        
        if(batsmanObject.Team == teamName && batsmanObject.Batsman == batsmanName){
            batsmanObject.Runs = batsmanObject.Runs + runs;
            batsmanObject.Balls += balls;
            batsmanObject.Fours += fours;
            batsmanObject.Sixes += sixes;
            return;
        }
    }

    let batsmanObject = {
        Team : teamName ,
        Batsman : batsmanName ,
        Runs : runs ,
        Balls : balls , 
        Fours : fours , 
        Sixes : sixes
    }
    leaderboard.push(batsmanObject);
}


module.exports = getMatchDetails;