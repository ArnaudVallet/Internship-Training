const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  url: {
    type: String
  },
  titre: {
    type: String
  }
});

module.exports = videoSchema
