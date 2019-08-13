
const readline = require('readline');
const fs = require('fs');

// A message of the day
let chuckCounter = 0;

// HINT: Generating random integer
const chuckLine = Math.floor(Math.random() * (86)) + 1;

const rl = readline.createInterface({
    input: fs.createReadStream('chuck.txt')
});

// HINT: Reading file line by line
rl.on('line', (line) => {

    if(chuckCounter == chuckLine) {
        console.log(line);
    }

    chuckCounter++;

})
