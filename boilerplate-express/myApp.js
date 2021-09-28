var express = require('express');
var app = express();


console.log('Hello World');
absolutePath = __dirname + '/public';
app.use('/public', express.static(absolutePath));


app.get('/public', (req, res) => {
    absolutePath2 = __dirname + '/views/index.html';
    console.log(absolutePath2);
    //res.send('Hello Express');
    res.sendFile(absolutePath2);
});

























 module.exports = app;
