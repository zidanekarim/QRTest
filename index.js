const express = require('express');
const app = express();
const { parse } = require("csv-parse");
const fs = require('fs');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://VERCEL:VERCEL123@payments.a0wpuhc.mongodb.net/students?retryWrites=true&w=majority'

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res)  {
    res.sendFile(__dirname + "/public/index.html");
});

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
const paymentSchema = new mongoose.Schema({
  email: { type: String, index: true },
  paid: Boolean,
});

const Payment = mongoose.model("Payment", paymentSchema);





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/run", async (req, res) => {
  const searchText = req.body.text;
  try {
    const payment = await Payment.findOne({ email: searchText }).limit(1).exec();
    const found = !!payment; // Converts payment to a boolean value
    res.send(found);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});





app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res)  {
    res.sendFile(__dirname + "/public/index.html");
});









app.listen(5000, () => {
    console.log('Server is running at port 5000');
});