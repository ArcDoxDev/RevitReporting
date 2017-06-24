/*
Use "nodemon app" in commandline for testing if possible
*/

// use the express module
var express = require('express');
// use body-parser to use POST requests in express
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
// get access to all methods in express
var app = express();


app.set('view engine', 'ejs');
// listen out on port 3000 for requests
app.listen(3000);

var modelReview = app.locals.jsdata = require('./js/modelInfo.json');
var reviewTitles = app.locals.jsdata = require('./js/modelInfoTitles.json');
var jsonData = app.locals.jsdata = require('./js/newData.json');
var newArray = app.locals.jsdata = require('./js/newArray.json');
var con = app.locals.jsdata = require('./js/constant.json');
// Test to see if json file is found
//console.log(jsonData[0].grids[0].name);

var review = jsonData[0];

var keyTitles = Object.keys(review);
// console.log(Object.keys(review)[0]);
console.log(modelReview[4][0].lat);
// console.log(con[0][0].name);
var fileName = con[0][0];
// var count = 0;
// newArray.forEach(function(element) {
//     console.log(keyTitles[count]);
//     element.forEach(function(item) {
//         console.log(item.name);
//     });
//     count += 1;
// });


// Static express functions will take care of the assests
app.use('/css', express.static('css'));

// The server will send/render the index.ejs file
app.get('/', function(req, res) {
    res.render('index');
});
// The server will take a request(req) and send/render a responce(res) as a html file.
app.get('/contact', function(req, res) {
    // for testing to see what data was sent through the url
    // console.log(req.query);
    res.render('contact', { qs: req.query });
});

// The Client sends a POST to the server.
app.post('/contact', urlencodedParser, function(req, res) {
    // for testing to see what data was sent through the url
    // console.log(req.body);
    res.render('contact-success', { data: req.body });
});

// A variable used for testing
var stuff = { age: 20, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing'] };


// what the server will respond with a request
app.get('/profile/:user', function(req, res) {
    // need a name reference in the ejs file and then the object e.g "data: jsonData, newData: stuff"
    res.render('profile', { fname: fileName, title: keyTitles, modtitles: reviewTitles, modreview: modelReview, person: req.params.user, info: newArray, newData: stuff });
});

// what the server will respond with a request for
app.get('/profile', function(req, res) {
    // need a name reference in the ejs file and then the object e.g "data: jsonData, newData: stuff"
    res.render('profile', { fname: fileName, title: keyTitles, modtitles: reviewTitles, modreview: modelReview, person: req.params.user, info: newArray, newData: stuff });
});

// what the server will respond with a request for
app.get('/materials', function(req, res) {
    // need a name reference in the ejs file and then the object e.g "data: jsonData, newData: stuff"
    res.render('materials', { fname: fileName, title: keyTitles, modtitles: reviewTitles, modreview: modelReview, person: req.params.user, info: newArray, newData: stuff });
});

// what the server will respond with a request for
app.get('/map', function(req, res) {
    // need a name reference in the ejs file and then the object e.g "data: jsonData, newData: stuff"
    res.render('map', { fname: fileName, title: keyTitles, modtitles: reviewTitles, modreview: modelReview, person: req.params.user, info: newArray, newData: stuff });
});

app.get('/counts', function(req, res) {
    // need a name reference in the ejs file and then the object e.g "data: jsonData, newData: stuff"
    res.render('counts', { fname: fileName, title: keyTitles, modtitles: reviewTitles, modreview: modelReview, person: req.params.user, info: newArray, newData: stuff });
});