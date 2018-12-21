'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  imageURL: {type: String, required: true}, 
  imageDescription: {type: String, required: true},
  name: {type: String, required: true},
  sex: {type: String, required: true},
  age: {type: Number, required: true},
  breed: {type: String, required: true},
  story: {type: String, required: true}
});

schema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Cat', schema);