const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  nbBonnesRéponses: {
    type: Number
  },
  reponse1: {
    Nom: String,
    bonneRéponse: Boolean
  },
  reponse2: {
    Nom: String,
    bonneRéponse: Boolean
  },
  reponse3: {
    Nom: String,
    bonneRéponse: Boolean
  },
  reponse4: {
    Nom: String,
    bonneRéponse: Boolean
  }
});

module.exports = questionSchema
