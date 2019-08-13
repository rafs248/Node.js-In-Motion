const fs = require('fs');

// HINT: Delete a file

fs.unlink('message.txt', (err) => {
	if (err) throw err;
	console.log('The file has been deleted!');
});

