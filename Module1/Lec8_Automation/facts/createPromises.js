let fs = require("fs");

function myPromisifiedFun(filePath){
    return new Promise( function(scb , fcb){
        
        // async func
        fs.readFile( filePath , function(error , data){
            if(error){
                fcb("Data nhi aaya !!");
            }
            else{
                scb("testing success callback !!!");
            }
        })

    }); //it will create a new promise object !!!   
}

let pendingPromise = myPromisifiedFun("./f1.txt");

pendingPromise.then(scb);
pendingPromise.catch(fcb);

function scb(data){
    console.log(data+"");
}
function fcb(error){
    console.log(error);
}

