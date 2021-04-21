let fs = require("fs");

let extensionsMapping = require("./util.js");


let testFolderPath = "./Downloads";
let allFiles = fs.readdirSync(testFolderPath);
// console.log(allFiles);

for(let i=0 ; i<allFiles.length ; i++){
    sortFile(allFiles[i]);
}


function getExtension(file){
    file = file.split(".");
    return file[1];
}

// {
//     "Documents" : ["doc" , "pdf" , "txt" ],
//     "Images": ["img" , "jpg" , "gif" , "png"],
//     "Audio": ["mp3"] ,
//     "Video": ["mp4" , "mkv"],
//     "Applications" : ["exe"]
// }

function checkExtensionFolder(extension){
    // extension = "doc";
    let extensionFolderName = testFolderPath;
    for(let key in extensionsMapping){
        let extensions = extensionsMapping[key];
        if(extensions.includes(extension)){
            extensionFolderName = extensionFolderName+"/"+key;
            break;
        }
    }
    // extensionFolderName = 'Documents'
    // "./Downloads"
    // let folderToBeChecked = testFolderPath+"/"+extensionFolderName;
    // "./Downloads/Documents"
    let isFolderExist =  fs.existsSync(extensionFolderName);
    if(!isFolderExist){
        fs.mkdirSync(extensionFolderName);
    }
}

function moveFile(file , extension){

}


function sortFile(file){
    let extension = getExtension(file);
    // console.log(extension);
    checkExtensionFolder(extension);
    // moveFile();
}