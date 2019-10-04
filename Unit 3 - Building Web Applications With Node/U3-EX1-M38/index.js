const express = require('express');

const app = express();

app.get('/',( req,resp) => {
    let myTemplate = 'index';
    let data = {currentTime: new Date()};
    resp.render(`${__dirname}/templates/${myTemplate}.pug`, data );
    resp.end();
}).listen(8080);

console.log("Server listening on 8080");