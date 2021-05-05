const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: [true, "Veuillez saisir un titre au module."],
  },
  composants: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Composant'
  }],
})

const Module = mongoose.model('Module', ModuleSchema);

module.exports = Module