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
app.get('/api/products/all', function (req, res) {
  Product.find({
  }, function (err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
})

app.get('/api/products/price', function (req, res) {
  Product.find({
    $and : [
      {price: {$gte: req.query.min}},
      {price: {$lte: req.query.max}}
    ]
  }, function (err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
})

app.get('/api/products/design', function (req, res) {
  Product.find({
    design: req.query.design
  }, function (err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
})

app.get('/api/products/brand', function (req, res) {
  Product.find({
    brand: req.query.brand
  }, function (err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
})

app.listen(process.env.PORT || 8888, () => console.log(`Listening on port ${process.env.PORT || 8888}!`));
