let contents = process.argv.slice(2);
// console.log(contents);

const flags = [];
const files = [];

for(let i=0 ; i<contents.length ; i++){
    if(contents[i].startsWith("-")){
        flags.push(contents[i])
    }else{
        files.push(contents[i]);
    }
}

console.log(flags);
console.log(files);