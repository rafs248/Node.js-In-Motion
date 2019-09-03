const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Please enter file name:", (filename) => {
    console.log(`Selected file: ${filename}`);
    const rf = readline.createInterface({
        input: fs.createReadStream(filename),
        output: fs.createWriteStream(filename+".out")
    });

    rf.on('line', (line) => {
        console.log(line);
        rf.write("-"+line+"-")
    })

//    rf.close();
    rl.close();
    // wf.close();

});