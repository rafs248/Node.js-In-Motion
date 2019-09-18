// TODO: continue on this program

/**
 * SPEC: This program will display list of EC2 instances in AWS including status: running / stoppped.
 *
 * STATUS: does not work: Request path contains unescaped characters.
 *
 *
 * PLAN:
 * 1.Make a request to bbc and just display whatever returned (done)
 * 2.Prepare API request to AWS - can be in postman and use it in program
 * 3.Display specific fields from AWS response
 *
 */


console.log('Checking EC2 machines ...');

const req = require('request');

// // There is only one event to handle - when we get full response
// req.get({uri: 'https://rafs248-pub.s3.eu-west-2.amazonaws.com/www-test-file-2.txt', json: false, proxy:'http://proxy-l.com.hmpo.net%3A3128'}, (error, response, body) => {
//     console.log(`Received error: ${error}`);
//     console.log(`Received response:`,response);
// //    console.log(`Received body: ${body}`);
//     });

var proxyUrl = "http://proxy-l.com.hmpo.net%3A3128";

var proxiedRequest = req.defaults({'proxy': proxyUrl});

proxiedRequest.get("http://bbc.co.uk", function (error, response, body) {
    console.log(`Received error: ${error}`);
    console.log(`Received response:`,response);
   console.log(`Received body: ${body}`);
})