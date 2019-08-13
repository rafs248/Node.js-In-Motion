
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// HINT: Reading from the console
rl.question("What's your name? ", (answer) => {
  
  console.log(`Well hello there ${answer}`);

  rl.close();
  
});