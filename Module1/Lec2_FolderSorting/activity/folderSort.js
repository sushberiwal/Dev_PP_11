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
    return extensionFolderName;
}

function moveFile(file , extensionFolderName){
    let sourceFile = testFolderPath+"/"+file;
    let destinationFile = extensionFolderName+"/"+file;
    // copy file from the source path to destination path !!
    fs.copyFileSync(sourceFile , destinationFile);
    // then delete file from the source path !!
    fs.unlinkSync(sourceFile);
}


function sortFile(file){
    let extension = getExtension(file);
    // console.log(extension);
    let extensionFolderName = checkExtensionFolder(extension);
    moveFile(file , extensionFolderName );
}