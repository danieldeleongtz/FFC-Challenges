var express = require('express');
var app = express();


console.log('Hello World');


app.get('/', (req, res) => {
    absolutePath = __dirname + '/views/index.html';
    console.log(absolutePath);
    //res.send('Hello Express');
    res.sendFile(absolutePath);
});


























 module.exports = app;
