var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var fs = require("fs");

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/app"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})

app.post("/survey", function(req, res) {
    console.log(req.body['scores[]'])
    var input = req.body['scores[]']
    fs.readFile("users.JSON", "utf8", function(error, data) {
    	var match=JSON.parse(data)
    	var least;
    	for (var i=0; i<match.length; i++){
    		var diff=0;
    		console.log(match[i].scores)
    		for (var j=0; j<input.length; j++){
    			diff+=Math.abs(parseInt(input[j])-match[i].scores[j]);
    		}
    		match[i].diff=diff;
    		console.log(match[i]);
    		if (!least){
    			least=match[i].diff
    		} else if (least>match[i].diff){
    			least=match[i].diff
    			}
    	}
    	console.log(least);
    	for (var i=0; i<match.length; i++){
    		if (match[i].diff==least){
    			console.log(match[i])
    			res.json(match[i])
    		}
    	}
    })

})
app.listen(port);
