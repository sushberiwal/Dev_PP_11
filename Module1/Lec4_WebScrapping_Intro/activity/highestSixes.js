let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

const request = require("request");
const cheerio = require("cheerio");


request(matchLink , cb);

function cb(error ,response ,data){
    getHighestSixes(data);
}

function getHighestSixes(data){
    let highestSixes;
    let batsmanName;
    let strikeRate;

    let myDocument = cheerio.load(data);
    let bothBatsmanTable = myDocument(".table.batsman");
    // console.log(bothBatsmanTable);
    for(let i = 0; i<bothBatsmanTable.length ; i++){
        let oneBatsmanTable = myDocument(bothBatsmanTable[i]);

        let allTrs = oneBatsmanTable.find("tbody tr");
        
        for(let j=0 ; j<allTrs.length ; j++){
            let allTds = myDocument(allTrs[j]).find("td");
            if(allTds.length > 1){
                // inside valid tr
                if(i==0 && j==0){
                    batsmanName = myDocument(allTds[0]).text();
                    highestSixes = myDocument(allTds[6]).text();
                    strikeRate = myDocument(allTds[7]).text();
                }
                else{
                    let currentSixes = myDocument(allTds[6]).text();
                    let currentStrikeRate = myDocument(allTds[7]).text();
                    if(currentSixes > highestSixes || (currentSixes == highestSixes && currentStrikeRate > strikeRate ) ){
                        batsmanName = myDocument(allTds[0]).text();
                        highestSixes = currentSixes;
                        strikeRate = currentStrikeRate;
                    }
                }
            }
        }

    }
    console.log("BatsmanName = " + batsmanName );
    console.log("Sixes = " + highestSixes);
    console.log("StrikeRate = " + strikeRate);
}