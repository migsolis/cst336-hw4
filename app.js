const express = require('express');
const app = express();
const faker = require("faker");

app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    let card = faker.helpers.createCard();
    let avatar = faker.internet.avatar();
    console.log(card);
    res.render('index.ejs', {card: card, avatar: avatar});
});

app.get('/computer_vision', (req, res) => {
    res.render('computer_vision.ejs');
});

app.get('/control', (req, res) => {
    res.render('control.ejs');
});

app.get('/hmi', (req, res) => {
    res.render('hmi.ejs');
});

// starting server
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Express server is running...');
});