const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255 },
    author: { type: String, maxlength: 255 },
    detail: { type: String, maxlength: 255 },
    CreateAt: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Course', Course);
