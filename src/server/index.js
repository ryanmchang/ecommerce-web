const express = require('express');
const os = require('os');
const mongoose = require('mongoose');

const app = express();
let Product = require("./models/product");

app.use(express.static('dist'));

//Setup ORM for MongoDB
mongoose.connect('mongodb://localhost/ecommerce_web', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("I am mongoose!");
});


//api endpoints
app.get('/api/example', function (req, res) {
  console.log("I am get!");
  Product.find({}, function (err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });

})

app.listen(process.env.PORT || 8888, () => console.log(`Listening on port ${process.env.PORT || 8888}!`));
