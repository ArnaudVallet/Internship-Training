const mongoose = require('mongoose');
const ErrorResponse = require('../utils/errorResponse');

const ModuleSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: [true, "Veuillez saisir un titre au module."],
    maxLength: [40, 'Votre titre ne peut pas dépasser 40 caractères.'],
    minLength: [10, 'Votre titre doit faire au moins 10 caractères.']
  },
  composants: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Composant'
  }],
});

ModuleSchema.methods.addComposant = async function(composantId){
  let composantIdAlreadyInside = await this.composants.includes(composantId);
  if(composantIdAlreadyInside){
    throw new ErrorResponse("Le module contient déjà ce composant.", 400)
  }
  await this.composants.push(composantId);
  await this.save();
  return this;
};

const Module = mongoose.model('Module', ModuleSchema);

module.exports = Module