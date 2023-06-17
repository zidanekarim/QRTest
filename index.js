const express = require('express');
const app = express();
const { parse } = require("csv-parse");
const fs = require('fs');

var names = [];

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res)  {
    res.sendFile(__dirname + "/public/index.html");
});

// read finished.csv and fill names array with the FIRST column of the csv file
fs.createReadStream("finished.csv")
    .pipe(parse({ delimiter: ',' }))
    .on("data", function (dataRow) {
        console.log(dataRow[0]);
        names.push(dataRow[0]);
    })
    .on("end", function () {
        console.log("done");
        console.log(names)
    });




app.post("/run", async (req, res) => {
    // check if req.body's text is in names array. If it is, return true, else return false
    if (names.includes(req.body.text)) {
        console.log("true")
        res.send(true);
    } else {
        console.log("false")
        res.send(false);
    }
});






app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res)  {
    res.sendFile(__dirname + "/public/index.html");
});









app.listen(5000, () => {
    console.log('Server is running at port 5000');
});