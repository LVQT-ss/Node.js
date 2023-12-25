const express = require('express');  //common js 
const path = require('path');

require('dotenv').config();


//import express 
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.hostname;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route declarations
app.get('/', (req, res) => {
    res.send('Hello World! this is quoc thinh');
});

app.get('/abc', (req, res) => {
    res.render('sample.ejs');
});

app.get('/2', (req, res) => {
    res.send('<h1>thinh le viet quoc</h1>');
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
