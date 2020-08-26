
// basic server using http 
/*const http = require("http");

const server = http.createServer((request, response) => {
    
    console.log('method', request.method);
    console.log('url', request.url);

    const user = {
        name: 'Sandeep Ivan',
        job: 'programmer'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3001);*/


// building a server using express js and a middle ware called body parser
// importing express, body parser 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//using a middle ware to access the url encoded and json on the body req 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// this is how to serve static assets 
/*
app.use(express.static(__dirname + 'public'));
*/


//get request 
app.get('/', (req, resp) => {
    /*we get a req object when we get request, we also have access to properties of req object
    req.query;
    req.body; 
    req.header; 
    req.params;
    */
    resp.send('getting root')
});

app.get('/profile', (req, resp) => {
    console.log(req.path);
    resp.send('getting to profile');
});

// post request 
app.post('/profile', (req, resp) => {
    console.log(req.method);
    resp.send('success');
})






app.listen(4000);
