const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  titre: String
});

module.exports = articleSchema
