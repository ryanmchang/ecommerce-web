const express = require('express');

const os = require('os');
const mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;

const serverless = require('serverless-http');
const proxyPort = 8888;

const app = express();
const router = express.Router();

let Product = require("./models/product");
//specify user,pass,db in connection string
const connectionString = "mongodb+srv://ryanmchang:llamalazer@" +
 "cluster0-9rqqv.azure.mongodb.net/main" +
 "?retryWrites=true&w=majority";

app.use(express.static('dist'));

//Setup ORM for MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true }).catch(
    (error) => console.log(JSON.stringify(error))
);
let datab = mongoose.connection;
datab.on('error', console.error.bind(console, 'connection error:'));
datab.on('open', function() {
  console.log("I am mongoose!");
  datab.db.listCollections().toArray(function (err, names) {
        console.log(names);
        module.exports.Collection = names;
    });
    new Admin(datab.db).listDatabases(function(err, result) {
        console.log('listDatabases succeeded');
        // database list stored in result.databases
        var allDatabases = result.databases;
        console.log(allDatabases);
    });
});


//api endpoints
router.get('/api/products/all', function (req, res) {
  Product.find({
  }, function (err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
    console.log(products);
  });
})

router.get('/api/products/editorspick', function (req, res) {
  Product.find({
    editors_pick: true
  }, function (err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
})


router.get('/api/products/price', function (req, res) {
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

router.get('/api/products/design', function (req, res) {
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

router.get('/api/products/brand', function (req, res) {
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

app.use(router);

app.listen(process.env.PORT || proxyPort, () => console.log(`Listening on port ${process.env.PORT || proxyPort}!`));

module.exports = app;
module.exports.handler = serverless(app);
