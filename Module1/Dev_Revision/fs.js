const fs = require("fs");


// readFileSync => read contents of file
// writeFileSync => creates a file
// mkdirSync => creates a folder
// existsSync => check if a directory exists ?
// copyFileSync => copy contents of a file to other
// unlinkSync => delete a file
// readdirSync => get the list of all files in a folder !!

// gives the current directory path !!!
// console.log(__dirname);

let contentOfF1 = fs.readFileSync("./f1.txt");
console.log(contentOfF1+"");

fs.writeFileSync("./newFile.txt" , "Hi i am data of new file !!");


// fs.mkdirSync("./NewFolder/new/IAmNew");

// folderPath // FilePath it will return true or false
// console.log(fs.existsSync("./NewFolder"));


// fs.copyFileSync("./f1.txt" , "./NewFolder/f1Copy.txt");


// fs.unlinkSync("./newFile.txt");

console.log(fs.readdirSync("./"));