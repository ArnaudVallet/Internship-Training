const mongoose = require('mongoose');
const Populate = require("../utils/autopopulate");

const reqString = {
    type: String,
    required: true
}

const messageSchema = new mongoose.Schema({
    userId: reqString,
    text: reqString
}, { timestamps: true });

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
    const messages = this.messages;
    const res = await Message.insertMany(messages);
    // console.log(res); // [{ _id }, { _id }, { _id }]
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
    People
}