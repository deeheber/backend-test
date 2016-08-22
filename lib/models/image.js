const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = new Schema({
  url: {
    type: String
  },

  caption: {
    type: String
  }
});

module.exports = mongoose.model('Image', image);
