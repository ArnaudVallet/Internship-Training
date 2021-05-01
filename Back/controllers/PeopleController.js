const { People, Message, Comment } = require('../models/TestUserMessageModel');

exports.createPeopleDoc = async(req, res, next) => {
  const email = 'test@gmail.com';
  const data = new People({
    email,
    username: 'testing',
    password: 'pass',

    modules: [
      {
        userId: email,
        text: 'Fake text 1',
        components: [
          { content: 'Commentaire 1' },
          { content: 'Commentaire 2' },
          { content: 'Commentaire 3' }
        ]
      },
      {
        userId: email,
        text: 'Fake text 2',
        components: [
          { content: 'Commentaire 4' },
          { content: 'Commentaire 5' },
          { content: 'Commentaire 6' }
        ]
      },
      {
        userId: email,
        text: 'Fake text 3',
        components: [
          { content: 'Commentaire 7' },
          { content: 'Commentaire 8' },
          { content: 'Commentaire 9' }
        ]
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

exports.getWithAggregate = async(req, res, next) => {
  const retrieve = await People.aggregate([
    { $lookup: {
        from: 'messages',
        localField: 'messages',
        foreignField: '_id',
        as: 'bordel '
      }
    }
  ])
  
  res.json(retrieve);
};

exports.createPeopleDocByPieces = async(req, res, next) => {
  // Get the body
  const data = req.body;

  // Split things attempt
  const messages = data.messages;

  // From messages get [ message[comments], message[comments], message[comments]]
  const allComments = messages.map(mess => mess.comments)
  
  const insertedComments = await Comment.insertMany()
  
}
