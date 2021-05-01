const mongoose = require('mongoose');
const Populate = require("../utils/autopopulate");

const reqString = {
    type: String,
    required: true
}

const commentSchema = new mongoose.Schema({
  content: reqString,
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema);

const messageSchema = new mongoose.Schema({
    userId: reqString,
    text: reqString,
    comments: [{
      type: mongoose.Schema.Types.Mixed,
      ref: 'Comment'
    }]
}, { timestamps: true });

// messageSchema.pre('insertMany', async function(next, docs) {

//   // try {

//   //   var messages = []

//   //   docs.forEach(async message => {
//   //     const insertedComments = await Comment.insertMany(message.comments);
//   //     const newCommentsArray = await insertedComments.map(com => com._id);
//   //     console.log(newCommentsArray);
//   //     message.comments = newCommentsArray;
//   //     console.log(message);
//   //     messages.push(message);
//   //   });

//   //   console.log('Ligne 39', messages);

//   //   docs = messages;

//   //   // const messagesComments = docs.map( async doc => {
//   //   //   return insertedComments.map( async comment => {
//   //   //     comment._id
//   //   //   })
//   //   // })
    
  
//   //   next();
//   // } catch (error) {
//   //   next(error);
//   // }
// })

const Message = mongoose.model('Message', messageSchema);

const peopleSchema = new mongoose.Schema({
    email: reqString,
    username: reqString,
    password: reqString,
    messages: [{
      type: mongoose.Schema.Types.Mixed,
      ref: 'Message'
    }],
    // messagesRef: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Message'
    // }],
});

peopleSchema.pre('save', async function(next){

  await this.messages.forEach(async message => {
    const insertedComments = await Comment.insertMany(message.comments);
    const newCommentsArray = await insertedComments.map(com => com._id);
    console.log(newCommentsArray);
    message.comments = newCommentsArray;
    console.log(message);
    this.messages.push(message);
  });
  this.messages = []
  console.log('Ligne 83', this.messages);

  const res = await Message.insertMany(this.messages);
  this.messages = []
  // res.map( message => {
  //     this.messagesRef.push(message._id);
  // });
  res.map( message => {
      this.messages.push(message._id);
  });
})

//peopleSchema.pre('find', Populate('messagesRef'));


const People = mongoose.model('People', peopleSchema);

module.exports = {
  Message,
  People,
  Comment
}