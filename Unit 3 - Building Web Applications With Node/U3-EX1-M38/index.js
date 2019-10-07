const express = require('express');
const chuck_module = require('./chuck');

const app = express();

app.get('/',( req,resp) => {
    let myTemplate = 'index';
    chuck_module.getChuckNorrisFact(msg=>{
        let data = {currentTime: new Date(), chuckMessage:msg};
        resp.render(`${__dirname}/templates/${myTemplate}.pug`, data );
        resp.end();
    });

});

// Serve the stylesheet
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.listen(8080);


console.log("Server listening on 8080");