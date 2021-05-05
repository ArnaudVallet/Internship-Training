const mongoose = require('mongoose');
const questionSchema = require('./QuestionSchema')

const quizSchema = new mongoose.Schema({
  nom: { type: String },
  description: { type: String },
  questions: [questionSchema],
  obligatoire: { type: Boolean }
});

module.exports = quizSchema
