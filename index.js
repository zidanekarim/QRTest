const express = require('express');
const app = express();
const { parse } = require("csv-parse");
const fs = require('fs');
const bodyParser = require('body-parser');


var names = ["zkarim40@stuy.edu", "zidane.karim@stuypy.org", "zkarim7676@gmail.com", "zidane.karim@stuysu.org"]

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res)  {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/run", async (req, res) => {
    // check if req.body's text is in names array. If it is, return true, else return false
    console.log('GOT HERE');
    console.log(req.body.text);
    const searchText = req.body.text;
    const found = names.includes(searchText);
    res.send(found);
});






app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res)  {
    res.sendFile(__dirname + "/public/index.html");
});









app.listen(5000, () => {
    console.log('Server is running at port 5000');
});