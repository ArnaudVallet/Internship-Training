const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  nbCorrect: {
    type: Number,
    default: function() {
      let count = 0;
      this.réponse1.correct ? count++ : undefined;
      this.réponse2.correct ? count++ : undefined;
      this.réponse3.correct ? count++ : undefined;
      this.réponse4.correct ? count++ : undefined;
      return count;
    }
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

// questionSchema.virtual('nbCorrect').get(function() {
//   let count = 0;
//   this.réponse1.correct ? count++ : undefined;
//   this.réponse2.correct ? count++ : undefined;
//   this.réponse3.correct ? count++ : undefined;
//   this.réponse4.correct ? count++ : undefined;
//   return count;
// });

module.exports = questionSchema
