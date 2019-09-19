/**
 * Promisify reguest.get() function and use it to download few pictures from public bucket in AWS S3.
 */

// TODO: Continue on this program
console.log("Getting files form S3 ...");


const req = require('request');


function getFilePromise(uri){
    return new Promise(((resolve, reject) => {
        req.get({uri:uri, json:true}, function (error, response, body) {
            if(error!=null){
                reject(error);
            }else{
                resolve(body);
            }
        })
    }));
}

getFilePromise("https://rafs248-pub.s3.eu-west-2.amazonaws.com/ec2-data.json")
    .then(body=>console.log("Retrieved with promise: ",body[2].age))
    .catch(error=>console.log("Promise error: ",error));

