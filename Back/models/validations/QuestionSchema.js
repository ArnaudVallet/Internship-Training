const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  nbBonnesRéponses: {
    type: Number
  },
  réponse1: {
    text: String,
    correct: Boolean
  },
  réponse2: {
    text: String,
    correct: Boolean
  },
  réponse3: {
    text: String,
    correct: Boolean
  },
  réponse4: {
    text: String,
    correct: Boolean
  }
});

module.exports = questionSchema
