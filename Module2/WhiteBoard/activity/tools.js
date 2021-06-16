let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");
undo.addEventListener("click" , undoLine);
redo.addEventListener("click" , redoLine);

function undoLine(){
    if(linesDB.length){
        let undoLine = linesDB.pop();
        redoLinesDB.push(undoLine);
    
        // clear canvas
        ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    
        drawLinesFromDB();
    }
}

function redoLine(){
    if(redoLinesDB.length){
        let redoLine = redoLinesDB.pop();
        for(let i=0 ; i<redoLine.length ; i++){
            let pointObject = redoLine[i];
            if(pointObject.type == "md"){
                ctx.beginPath();
                ctx.moveTo(pointObject.x , pointObject.y);
            }
            else{
                ctx.lineTo(pointObject.x , pointObject.y);
                ctx.stroke();
            }
        }
        linesDB.push(redoLine);
    }



}

function drawLinesFromDB(){
    for(let i=0 ; i<linesDB.length ; i++){
        let line = linesDB[i];
        for(let i=0 ; i<line.length ; i++){
            let pointObject = line[i];
            if(pointObject.type == "md"){
                ctx.beginPath();
                ctx.moveTo(pointObject.x , pointObject.y);
            }
            else{
                ctx.lineTo(pointObject.x , pointObject.y);
                ctx.stroke();
            }
        }
    }
}