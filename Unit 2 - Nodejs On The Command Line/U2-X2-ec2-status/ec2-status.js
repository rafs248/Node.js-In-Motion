// TODO: continue on this program

/**
 * SPEC: This program will download json file from S3 and list few fields from it.
 *
 * STATUS: done
 *
 *
 */


console.log('Checking EC2 machines ...');

const req = require('request');

var proxyUrl = "http://proxy-l.com.hmpo.net%3A3128";

var proxiedRequest = req.defaults({'proxy': proxyUrl});

req.get({uri:"https://rafs248-pub.s3.eu-west-2.amazonaws.com/ec2-data.json", json:true}, function (error, response, body) {
    console.log(`Received body: ${body}`);
    for(m in body){
        console.log(`Machine ${body[m].name} is ${body[m].status}`);
    }
    console.log(`Received error: ${error}`);
})