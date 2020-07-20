const express = require('express');
const app = express();
const faker = require("faker");

app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/computer_vision', (req, res) => {
    res.render('computer_vision.html');
});

app.get('/control', (req, res) => {
    res.render('control.html');
});

app.get('/hmi', (req, res) => {
    res.render('hmi.html');
});

// starting server
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Express server is running...');
});