//Server Section
const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

//Main Page + link to the html files 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/web/index.html')
});
//Subscribe Page + link to the html files 
app.get('/subscribe', function(req, res) {
    res.sendFile(__dirname + '/web/subscribe.html')
});

//Subscribe Page
app.post('/subscribe', function(req, res) {
    var fir = req.body.first;
    var sur = req.body.second;

    var sub = "";
    sub = fir + " " + sur;
    res.send("<h1 style='margin:auto; text-align:center;'> Submitted Your Details </h1>" + "<br><br>" + "<h2 style='margin:auto; text-align:center;'>Thank you  " + sub + "</h2>");
});

app.listen(port, function(req, res) {
    console.log("Server is up and running " + port);
});