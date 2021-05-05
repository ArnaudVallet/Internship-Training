const mongoose = require('mongoose');
const Populate = require("../utils/autopopulate");

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
      enum: {
        values:  ['Débutant', 'Intermédiaire', 'Confirmé'],
        message: 'Le niveau {VALUE} n\'est pas supporté'
      } 
    },
    modules: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module'
    }],
    // published: {
    //     type: Boolean,
    //     default: false
    // }
})

//FormationSchema.pre('find', Populate('modules'));
// FormationSchema.virtual('EstimatedTime'/*, {
    //     ref: 'Module',
    //     localField: 'modules',
    //     foreignField: '_id'
    //   }*/)
    //   .get( async() => {
    //     let data = await this.modules;
    //     let time;
    //     if(data){
    //         data.map(module => {
    //             time += module.time
    //         })
    //     }
    //     return time;
    // });

const Formation = mongoose.model('Formation', FormationSchema);

module.exports = Formation;
