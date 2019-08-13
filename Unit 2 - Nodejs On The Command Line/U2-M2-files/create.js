const fs = require('fs');

// HINT: Writing a file
fs.writeFile('message.txt', 'Node.js In Motion', (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});

