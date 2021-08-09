const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('mains/home');
})

app.get('/join', (req, res) => {
    res.render('mains/join');
})

app.get('/crew', (req, res) => {
    res.render('mains/crew');
})

app.get('/events', (req, res) => {
    res.render('mains/events');
})

app.get('/about', (req, res) => {
    res.render('mains/about');
})

const port = 8080;
app.listen(port, () => {
    console.log(`serving on port ${port}`);
})