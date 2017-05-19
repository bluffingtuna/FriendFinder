//Dependencies
//==========================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up the express app
//==========================================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the express app to handle data parsing
app.use(bodyParser.json());
