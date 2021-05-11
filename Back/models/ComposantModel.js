const mongoose = require('mongoose');
const quizSchema = require('./validations/QuizSchema');
const videoSchema = require('./validations/VideoSchema');
const articleSchema = require('./validations/ArticleSchema');

const composantSchema = new mongoose.Schema({
  // titre: {
  //   type: String,
  //   required: [true, 'Votre composant doit avoir un titre']
  // },
  type: {
    type: String,
    enum: ['vidéo','diapositive','article','quiz'],
    required: [true, 'Votre composant doit avoir un type']
  },
  quiz: quizSchema,
  vidéo: videoSchema,
  article: articleSchema
  
});

const Composant = mongoose.model('composant', composantSchema);

module.exports = Composant
