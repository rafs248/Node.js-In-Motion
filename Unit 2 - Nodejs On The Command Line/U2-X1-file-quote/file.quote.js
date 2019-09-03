const readline = require('readline');
const fs = require('fs');

const consoleReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


consoleReader.question("Please enter file name:", (filename) => {
    if(filename.length>0) {
        console.log(`Selected file: [${filename}]`);
    }else{
        filename = 'book-authors.txt';
        console.log(`Using default file: [${filename}]`);
    }
    const fileReader = readline.createInterface({
        input: fs.createReadStream(filename),
    });

    fileReader.on('line', (line) => {
        console.log("-"+line+"-");
    })
    consoleReader.close();
});