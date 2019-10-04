const app = require('express');

app.get('/*',(req,resp)=>{
    resp.write('Hello world');
    resp.end();
}).start(8080);