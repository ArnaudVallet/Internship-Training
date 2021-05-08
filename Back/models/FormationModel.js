const mongoose = require('mongoose');
const ErrorResponse = require('../utils/errorResponse');

const FormationSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: [true, "Veuillez saisir un titre à la formation."],
    maxLength: [40, 'Votre titre ne peut pas dépasser 40 caractères.'],
    minLength: [10, 'Votre titre doit faire au moins 10 caractères.'],
    unique: true
  },
  description: {
    type: String,
    required: [true, "Veuillez donner une description à la formation."],
    maxLength: [100, 'Votre description ne peut pas dépasser 100 caractères.'],
    minLength: [20, 'Votre description doit faire au moins 20 caractères.']
  },
  niveau: {
    type: String,
    lowercase: true,
    enum: {
      values:  ['débutant', 'intermédiaire', 'confirmé'],
      message: 'Le niveau {VALUE} n\'est pas supporté'
    } 
  },
  image: {
    path: { type: String, default: 'url/par/défaut.jpg' },
    filename: { type: String, default: 'nom.jpg' }
  },
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  }],
  published: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

FormationSchema.methods.addModule = async function(moduleId){
  let moduleIsAlreadyInside = await this.modules.includes(moduleId)
  if(moduleIsAlreadyInside){
    throw new ErrorResponse("La formation contient déjà ce module.", 400)
  }
  await this.modules.push(moduleId);
  await this.save();
  return this;
};

const Formation = mongoose.model('Formation', FormationSchema);

module.exports = Formation;
