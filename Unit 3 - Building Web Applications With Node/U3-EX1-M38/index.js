const express = require('express');
const chuck_module = require('./chuck');

const app = express();
let port = 8081;



app.get('/', (req,resp) => {
    let myTemplate = 'index';

    (async()=>{
        const data = await getChuckNorrisFactPromise();
        resp.render(`${__dirname}/templates/${myTemplate}.pug`, data );
        resp.end();
    })();

});

// Serve the stylesheet
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.listen(port);


console.log("Server listening on ",port);

getChuckNorrisFactPromise = () =>{

    console.log("Now using await");
    const promise = new Promise((resolve)=>{
        chuck_module.getChuckNorrisFact(msg=>{
            let data = {currentTime: new Date(), chuckMessage:msg};
            resolve(data);
        });

    });
    return promise;
}