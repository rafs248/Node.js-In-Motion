const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Please enter file name:", (filename) => {
    console.log(`Selected file: ${filename}`);
    const rf = readline.createInterface({
        input: fs.createReadStream(filename)
    });
    // const wf = readline.createInterface({
    //     output: fs.createWriteStream(filename+".out")
    // });

    rf.on('line', (line) => {
        console.log(line);
        // wf.write("-"+line+"-")
    })

//    rf.close();
    rl.close();
    // wf.close();
});