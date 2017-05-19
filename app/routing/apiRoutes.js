var fs = require("fs");


module.exports = function(app) {

    app.post("/api/friends", function(req, res) {
        console.log(req.body['scores[]'])
        var input = req.body['scores[]']
        fs.readFile("app/data/users.JSON", "utf8", function(error, data) {
            var match = JSON.parse(data)
            var least;
            for (var i = 0; i < match.length; i++) {
                var diff = 0;
                console.log(match[i].scores)
                for (var j = 0; j < input.length; j++) {
                    diff += Math.abs(parseInt(input[j]) - match[i].scores[j]);
                }
                match[i].diff = diff;
                console.log(match[i]);
                if (!least) {
                    least = match[i].diff
                } else if (least > match[i].diff) {
                    least = match[i].diff
                }
            }
            console.log(least);
            for (var i = 0; i < match.length; i++) {
                if (match[i].diff == least) {
                    console.log(match[i])
                    res.json(match[i])
                }
            }
        });
    });

    app.get("/api/friends", function(req, res) {
        fs.readFile("app/data/users.JSON", "utf8", function(error, data) {
            res.json(JSON.parse(data))
            console.log(data)
        });
    });
}
