var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//sets up server
var PORT = process.env.PORT || 8080;

//create application/json parser
// var jsonParser = bodyParser.json()

//creates application form parser
app.use(bodyParser.urlencoded({ extended: true}))

//parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

//parse some custom thing into a buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

//parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

//function that reads HTMLRouting.js
require("./app/routing/htmlRoutes") (app, path);

//function that reads apiRoutes.js?
require("./app/routing/apiRoutes.js") (app, path);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});