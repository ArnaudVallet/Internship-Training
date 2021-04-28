const { People, Message } = require('../models/TestUserMessageModel');

exports.createPeopleDoc = async(req, res, next) => {
  const email = 'test@gmail.com';
  const data = new People({
    email,
    username: 'testing',
    password: 'pass',
    messages: [
      {
        userId: email,
        text: 'Fake text 1'
      },
      {
        userId: email,
        text: 'Fake text 2'
      },
      {
        userId: email,
        text: 'Fake text 3'
      }
    ]
  }) 
  const saved = await data.save();
  res.json(saved);
};

exports.getWithMixedTypeMessage = async(req, res, next) => {
  const retrieve = await People.find().populate('messages').exec();
  //console.log(retrieve);
  // retrieve.map((item, i) => {
  //     console.log(`Item n°${i} has this messages : `, item.messagesRef);
  // })
  res.json(retrieve);
};
