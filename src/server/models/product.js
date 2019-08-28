const mongoose = require('mongoose');

//Structure of db
let productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
});

//arg1 - model name
//arg2 - Schema
//arg3 - name of collection if pre-existing 
let Product = module.exports = mongoose.model('Product', productSchema, "items");
