const mongoose = require('mongoose');

const composantSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: [true, 'Votre composant doit avoir un titre']
  }
});

const Composant = mongoose.model('composant', composantSchema);

module.exports = Composant
